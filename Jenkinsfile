pipeline {
  agent any

  stages {
    stage("build") {
      steps {
        echo 'Build process'
        sh 'npm i'
      }
    }

    stage("test") {
      steps {
        echo 'Testing process'
        sh 'npm run wdio wdio.remote.conf.js'
      }
    }
  }
}
