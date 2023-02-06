# Fresh-Soup
Vexcode V5 Project.


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
        drive-train.h
        autonomous.h  
    src:  
        main.cpp  
        robot-config.cpp  
        drive-train.cpp  
        controller-mapping.cpp  
        autonomous.cpp
```

*this is not final and this file structure will get updated as I add code*

Config variables:

Joystick sensitivity: controller-mapping.h/.cpp  
drive train max Speed(max speed the drive train motors can go): drive-train.h/.cpp  

Drive Train functions:

forward/backward  
point turn  
swerve turn left/right  
