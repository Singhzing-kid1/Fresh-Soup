# Fresh-Soup
Vexcode V5 Project.

# Logbook

[Click Me](https://singhzing-kid1.github.io/Fresh-Soup/)

# Wiki

[Click Me](https://github.com/Singhzing-kid1/Fresh-Soup/wiki)


# Code planning:

First and formost there will be 2 versions of code. 1 version if we are part of the red alliance and the other if we are part of the blue alliance.  
Each version will be a different VexCode project.  

## File structure:

```
Blue/RedAlliance:  
    include:  
        vex.h  
        robot-config.h  
        controller-mapping.h  
        intake.h
        drive-train.h
        launcher.h
        autonomous.h  
    src:  
        main.cpp  
        robot-config.cpp  
        drive-train.cpp  
        controller-mapping.cpp  
        intake.cpp
        launcher.cpp
        autonomous.cpp
```

*this is not final and this file structure will get updated as I add code*

### Config variables:

|Variable|Descripition|Config File|Header File|
|-------------|-------------|-------------|-------------|
|sensitivity|joystick sensitivity|controller-mapping.cpp|controller-mapping.h|
|drive train max speed|maximum speed that the drive train motors can go|drive-train.cpp|drive-train.h|
|intake max speed|how fast the intake motos can go|intake.cpp|intake.h|
|intake motor|the actual motor for intake|intake.cpp|intake.h|
|left motor group|group of motors|drive-train.cpp|drive-train.h|
|right motor group|group of motors|drive-train.cpp|drive-train.h|
|drive train|group of motors|drive-train.cpp|drive-train.h|
|launcher max speed|how fast the launcher motor can go|launcher.cpp|launcher.h|
|launcher motor|the actual motor for the launcher|launcher.cpp|launcher.h|

### Functions:

|Function|Inputs|Type|Description|File|Header File|  
|-------------|-------------|-------------|-------------|-------------|-------------|
|left drive motor movement|double|void|takes in an double and moves the left three motors|drive-train.cpp|drive-train.h|
|right drive motor movement|double|void|takes in an double and moves the right three motors|drive-train.cpp|drive-train.h|
|value cap|int, double|double|takes an integer and a double, checks if the double is greater than the integer and if it is outputs the ineteger, if not it ouputs the value of the double|robot-config.cpp|robot-config.h|
|launcher motor movement|TBD|TBD|TBD|launcher.cpp|launcher.h|
|check a given joystick axis|int, vex::contoller::axis|bool|checks any given joystick axis for movement|controller-mapping.cpp|controller-mapping.h|
|check a given button|vex::controller::button|bool|checks a given button to see if it is pressed or not|controller-mapping.cpp|controller-mapping.h|

### Motors:

|Motor #|Gearbox Ratio|Reverse|Port|What for|.cpp file|.h file|
|----------|----------|----------|---------|----------|----------|----------|
|1|18-1|false|1|Drive train|drive-train.cpp|drive-train.h|
|2|18-1|false|2|Drive train|drive-train.cpp|drive-train.h|
|3|18-1|false|3|Drive train|drive-train.cpp|drive-train.h|
|4|18-1|true|4|Drive train|drive-train.cpp|drive-train.h|
|5|18-1|true|5|Drive train|drive-train.cpp|drive-train.h|
|6|18-1|true|6|Drive train|drive-train.cpp|drive-train.h|
|8|6-1|TBD|TBD|roller and intake motor|intake.cpp|intake.h|


## Math behind the launcher function

As we have gathered, a single flywheel must reach at least 4000 rpm to launch a vex SpinUp disc.

This means that we need to speed our flywheel up before pushing things into it.

some math for the code:

4000 RPM ~ 67 RPS

so over the course of a second, if the motor detects 67 or more rotations it pushes the disc into the fly wheel.

