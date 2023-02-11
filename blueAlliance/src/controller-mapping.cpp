/*
 * This file has the functions and the variables
 * that are use to detect contoller input
 */

#include "vex.h"

using namespace vex;

// variables
int sensitivity = 100; // in percent (0-100) of the joystick output caps the output of the joystick
// the main controller

// functions

bool axisCheck(int threshold, controller::axis axis){
    if (axis.position() > threshold || axis.position() < -threshold){
        return true;
        printf("Axis is %ld",  axis.position());
    } else {
        return false;
        printf("Axis is %ld",  axis.position());
    }
}
