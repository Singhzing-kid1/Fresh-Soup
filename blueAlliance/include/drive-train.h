/*
 * header file for drive-train.cpp
 */

using namespace vex;

// variables

extern int maxSpeed;
extern motor motor1;
extern motor motor2;
extern motor motor3;
extern motor motor4;
extern motor motor5;
extern motor motor6;

extern motor_group leftMotors;
extern motor_group rightMotors;
extern motor_group driveTrain;

// functions

void leftDrive(double);
void rightDrive(double);
