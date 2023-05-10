@Library('java-node') _
pipeline {
    agent {
        label('master')
    }
    tools {
        nodejs 'Node'
    }
    environment{
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-jesusmoralesc')
        
    }
    
   stages {
        stage('Read properties') {
            steps {
                script {
                    def file = readProperties file: 'project.properties'
                    env.image = file['imageName']
                    
                }
            }
        }

 stage('Test') {
            steps {
                  NodeInstall()
                  NodeTestJest()
            }
        }
    }
       
stage('Build') {
            steps {
                  DockerBuild()
            }
        }
    }
    
stage('Deploy') {
            steps {
                  DockerHubLogin()
                  DockerPush()
            }
        }
    }



    post {
        always {
            sh 'docker logout'
        }
    }
}
