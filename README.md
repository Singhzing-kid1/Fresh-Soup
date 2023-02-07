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

|Variable|Descripition|Config File|Header File|
|-------------|-------------|-------------|-------------|
|sensitivity|soystick sensitivity|controller-mapping.cpp|controller-mapping.h|
|drive train max speed|maximum speed that the drive train motors can go|drive-train.cpp|drive-train.h|
|intake max speed|how fast the intake motos can go|TBD|TBD|
|left motor group|group of motors|drive-train.cpp|drive-train.h|
|right motor group|group of motors|drive-train.cpp|drive-train.h|
|drive train|group of motors|drive-train.cpp|drive-train.h|

Drive Train functions:

|Function|Inputs|Type|Description|File|Header File|  
|-------------|-------------|-------------|-------------|-------------|-------------|
|left drive motor movement|double|void|takes in an double and moves the left three motors|drive-train.cpp|drive-train.h|
|right drive motor movement|double|void|takes in an double and moves the right three motors|drive-train.cpp|drive-train.h|
|speed cap|int, double|double|takes an integer and a double, checks if the double is greate than the integer and if it is outputs the value of the ineteger, if not it ouputs the value of the double|controller-config.cpp|controller-config.h|
