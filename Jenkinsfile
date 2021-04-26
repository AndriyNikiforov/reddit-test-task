pipeline {
    agent {
        docker {
            image 'lebowski25kurt/webdriverio:latest'
            args '-p 3000:3000'
        }
    }

    stages {
        stage('build') {
            steps {
                echo 'Build process'
                sh 'firefox -v'
                sh 'google-chrome --version'
                sh 'rm -rf reddit-test-task'
                sh 'git clone https://github.com/AndriyNikiforov/reddit-test-task.git'
                dir('reddit-test-task') {
                    sh 'pwd'
                    sh 'npm i'
                    sh 'rm -rf ./node_modules/.bin/chromedriver'
                    sh 'npm install chromedriver --chromedriver_version=84.0.4147.30'
                }
            }
        }

         stage('test') {
            steps {
                 parallel(
                        "First task": {
                            dir('reddit-test-task') {
                                echo 'Testing process'
                                sh 'wdio wdio.conf.js'
                            }
                        },
                        "Second task": {
                            dir('reddit-test-task') {
                                echo 'Testing process'
                                sh 'wdio wdio.conf.firefox.js'
                            }
                        }
                    )
            }
        }
    }
}
