curl -X POST http://localhost:8071/motion-control

curl -X POST -d "strafe=1" http://localhost:8071/motion-control

curl -X POST -d "strafe=0.1&forward=0.2" http://localhost:8071/motion-control
