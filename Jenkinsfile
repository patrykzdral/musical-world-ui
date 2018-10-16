pipeline {
  agent any

  environment {
    PROJECT_VERSION = ''
  }

  stages {
    stage('Fetch') {
      agent {
        docker 'circleci/node:9.6-stretch-browsers'
      }

      steps {
        sh 'yarn'
      }

      post {
        failure {
          echo "Fetch failed in Jenkins"
        }
      }
    }

    stage('Lint') {
      agent {
        docker 'circleci/node:9.6-stretch-browsers'
      }

      steps {
        sh 'yarn lint'
      }

      post {
        failure {
          echo "Lint failed in Jenkins!"
        }
      }
    }

    stage('Tests') {
      parallel {
        stage('unit tests') {
          agent {
            docker 'circleci/node:9.6-stretch-browsers'
          }

          steps {
            sh 'yarn test:ci'
          }

          post {
            failure {
              echo "Unit tests failed in Jenkins!"
            }
          }
        }

        stage('e2e tests') {
          agent {
            docker 'circleci/node:9.6-stretch-browsers'
          }

          steps {
            sh 'yarn e2e:pre-ci'
            sh 'yarn e2e:ci'
          }

          post {
            failure {
              echo "E2E tests failed in Jenkins!"
            }
          }
        }
      }
    }

    stage('Results') {
      agent any

      steps {
        sh 'touch target/junit_reports/TESTS-*.xml'
        sh 'touch target/e2e_reports/junitresults.xml'

        junit 'target/junit_reports/TESTS-*.xml'
        junit 'target/e2e_reports/junitresults.xml'

        publishHTML target: [
          allowMissing         : false,
          alwaysLinkToLastBuild: false,
          keepAll              : true,
          reportDir            : 'target/junit_coverage',
          reportFiles          : 'index.html',
          reportName           : 'Unit Tests Coverage Report'
        ]

        publishHTML target: [
          allowMissing         : false,
          alwaysLinkToLastBuild: false,
          keepAll              : true,
          reportDir            : 'target/e2e_screenshots',
          reportFiles          : 'htmlReport.html',
          reportName           : 'E2E Tests Screenshots Report'
        ]
      }

      post {
        failure {
          echo "Results failed in Jenkins!"
        }
      }
    }

    stage('Compile') {
      agent {
        docker 'circleci/node:9.6-stretch-browsers'
      }

      steps {
        sh 'yarn build:prod'
        stash includes: 'dist/', name: 'dist'
      }

      post {
        failure {
          echo "Compile failed in Jenkins!"
        }
      }
    }

    stage('VPS Deployment') {
      agent any

      steps {
        unstash 'dist'
        dir("${WORKSPACE}/scripts/") {
          sh 'mkdir -p ../deployment/'
          sh 'sudo chown jenkins:jenkins -R ../deployment'

          sh "chmod +x getProjectVersion.sh"
          script {
            PROJECT_VERSION = sh(
              script: "./getProjectVersion.sh",
              returnStdout: true
            ).trim()
          }

          sh "chmod +x runDeployment.sh"
          sh "./runDeployment.sh ${PROJECT_VERSION}"
        }
      }

      post {
        failure {
          echo "VPS Deployment failed in Jenkins!!"
        }
      }
    }
  }

  post {
    success {
      echo "All is well! Code is tested, built and deployed."
    }

    always {
      deleteDir()
    }
  }
}
