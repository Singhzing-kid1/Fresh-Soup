/*
 * functions and variables for the drive train
 */

#include "vex.h"

using namespace vex;

// variables

int maxSpeed = 100; // caps the motor speed
motor motor1 = motor(PORT1, ratio18_1, false);
motor motor2 = motor(PORT2, ratio18_1, false);
motor motor3 = motor(PORT3, ratio18_1, false);
motor motor4 = motor(PORT4, ratio18_1, true);
motor motor5 = motor(PORT5, ratio18_1, true);
motor motor6 = motor(PORT6, ratio18_1, true);

motor_group leftMotors = motor_group(motor1, motor2, motor3);
motor_group rightMotors = motor_group(motor4, motor5, motor6);

// functions

void leftDrive(double speed){
    leftMotors.spin(forward, speed, percent);
}

void rightDrive(double speed){
    rightMotors.spin(forward, speed, percent);
}
