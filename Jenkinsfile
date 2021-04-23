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
                sh 'npm install -g @wdio/cli'
                sh 'rm -rf reddit-test-task'
                sh 'git clone https://github.com/AndriyNikiforov/reddit-test-task.git'
                dir('reddit-test-task') {
                    sh 'pwd'
                    sh 'npm i'
                }
            }
        }

        stage('test') {
            steps {
                dir('reddit-test-task') {
                    echo 'Testing process'
                    sh 'wdio wdio.conf.js'
                }
            }
        }
    }
}
