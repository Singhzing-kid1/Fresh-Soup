#include "vex.h"

using namespace vex;

// A global instance of brain used for printing to the V5 brain screen
brain Brain;
controller mainController = controller(primary);

/**
 * Used to initialize code/tasks/devices added using tools in VEXcode Pro.
 *
 * This should be called at the start of your int main function.
 */
void vexcodeInit(void) {
  // Nothing to initialize
}

double speedCap(int cap, double value){
    if(value > cap){
        return cap;
        printf("capped positive\n");
    } else if(value < -cap){
        return -cap;
        printf("capped negative\n");
    } else {
        return value;
        printf("not capped\n");
    }
}


