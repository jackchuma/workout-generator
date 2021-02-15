const exerciseBank = {
    squat: ['Barbell Back Squat', 'Barbell Front Squat', 'Barbell Zercher Squat', 'DB Drop Squat', 'DB Goblet Squat', 'DB Front Curled Squat', 'Barbell Front Curled Squat', 'Barbell SL Back Squat', 'Bottoms-up KB + Reg KB Squat', 'Sideways Trap Bar Kickstand Squat', 'SL Barbell Front Curled Squat', 'SL DB Front Curled Squat', 'Bottoms-up KB Squat', 'Barbell OH Squat', 'Hanging Band Barbell Back Squats'],
    antSquat: ['Barbell Front Squat', 'Barbell Zercher Squat', 'DB Goblet Squat', 'DB Front Curled Squat', 'Barbell Front Curled Squat', 'Bottoms-up KB + Reg KB Squat', 'SL Barbell Front Curled Squat', 'SL DB Front Curled Squat', 'Bottoms-up KB Squat'],
    stabilitySquat: ['Hanging Band Barbell Back Squats', 'Barbell SL Back Squat', 'Sideways Trap Bar Kickstand Squat', 'SL Barbell Front Curled Squat', 'SL DB Front Curled Squat'],
    hinge: ['Conventional Deadlift', 'Sumo Deadlift', 'Barbell RDL', 'DB RDL', 'Barbell RDL + Shrug', 'Double Barbell SL RDL', 'DB SL RDL', 'KB SL RDL + switch hands', 'KB Bottoms-Up SL RDL', 'Goblet RDLs', 'Goblet SL RDLs', 'Zercher Good Mornings', 'Barbell SL Good Morning'],
    coreHinge: ['Barbell SL RDL', 'DB SL RDL', 'KB SL RDL + switch hands', 'Goblet RDLs', 'Goblet SL RDLs', 'Zercher Good Mornings', 'KB Bottoms-up SL RDL', 'Barbell SL Good Morning'],
    stabilityHinge: ['Barbell SL RDL', 'DB SL RDL', 'KB SL RDL + switch hands', 'Goblet SL RDL', 'KB Bottoms-up SL RDL', 'Barbell SL Good Morning'],
    lunge: ['Barbell Split Squat', 'DB Goblet Split Squat', 'DB Split Squat', 'Barbell Reverse Lunge w/ slider', 'DB Reverse Lunge w/ slider', 'DB Lateral Lunge w/ slider', 'Zercher Reverse Lunge w/ slider', 'DB Pinch Grip Bulgarian Split Squat', 'Front Racked Barbell Split Squats', 'Front Racked KB Split Squats', 'Zercher Split Squats', 'Barbell Front Curled Split Squats', 'DB Front Curled Split Squats', 'Goblet Bulgarian Split Squats'],
    antLunge: ['DB Goblet Split Squat', 'Zercher Reverse Lunge w/ Slider', 'Front Racked Barbell Split Squats', 'Front Racked KB Split Squats', 'Zercher Split Squats', 'Barbell Front Curled Split Squats', 'DB Front Curled Split Squats', 'Goblet Bulgarian Split Squats'],
    stabilityLunge: ['w/ front foot on pad', 'w/ back foot on roller', 'w/ back foot on MB', 'w/ back foot on PB', 'w/ eyes closed'],
    verticalPush: ['Standing Barbell OH Press', 'Standing DB OH Press', 'Standing DB SA OH Press', 'Bottoms-up Split Stance OH Press', 'Bench Seated Barbell OH Press', 'Bench Seated DB OH Press', 'Bench Seated SA DB OH Press', 'Kneeling Barbell OH Press', 'Kneeling DB OH Press', 'Kneeling DB SA OH Press', 'Kneeling Bottoms-up OH Press', '1/2 Kneeling Barbell OH Press', '1/2 Kneeling DB OH Press', '1/2 Kneeling DB SA OH Press', '1/2 Kneeling Bottoms-up OH Press', 'Floor Seated Barbell OH Press', 'Floor Seated DB OH Press', 'Floor Seated DB SA OH Press', 'Floor Seated Bottoms-up OH Press', 'PB Seated Barbell OH Press', 'PB Seated DB OH Press', 'PB Seated DB SA OH Press', 'PB Seated Bottoms-up OH Press'],
    coreVerticalPush: ['Kneeling Barbell OH Press', 'Kneeling DB OH Press', 'Kneeling DB SA OH Press', 'Kneeling Bottoms-up OH Press', '1/2 Kneeling Barbell OH Press', '1/2 Kneeling DB OH Press', '1/2 Kneeling DB SA OH Press', '1/2 Kneeling Bottoms-up OH Press', 'Floor Seated Barbell OH Press', 'Floor Seated DB OH Press', 'Floor Seated DB SA OH Press', 'Floor Seated Bottoms-up OH Press', 'PB Seated Barbell OH Press', 'PB Seated DB OH Press', 'PB Seated DB SA OH Press', 'PB Seated Bottoms-up OH Press'],
    verticalPull: ['Pull Up', 'Chin Up', 'Seated Lat Pulldown', 'Sprinter Pull Ups', 'Seated SA Lat Pulldown', 'Split Stance SA Lat Pulldown', 'Kneeling Lat Pulldown', '1/2 Kneeling Lat Pulldown', 'Kneeling SA Lat Pulldown', '1/2 Kneeling SA Lat Pulldown'],
    coreVerticalPull: ['Split Stance SA Lat Pulldown', 'Kneeling Lat Pulldown', '1/2 Kneeling Lat Pulldown', 'Kneeling SA Lat Pulldown', '1/2 Kneeling SA Lat Pulldown'],
    singleArmVerticalPull: ['Seated SA Lat Pulldown', 'Split Stance SA Lat Pulldown', 'Kneeling SA Lat Pulldown', '1/2 Kneeling SA Lat Pulldown'],
    horizontalPush: ['Barbell Bench Press', 'DB Bench Press', 'Barbell Incline Bench Press', 'Barbell Floor Press', 'DB Floor Press', 'Push Up', 'Iso Glute Bridge DB Bench Press (T-spine on bench)', 'SL Push Ups foot on med ball', 'Diamond Push Ups', 'Chinese Plank Sprinter Chaos T-Bench Press', 'PB SA DB Bench', 'SA Floor Press', 'Bottoms-up Bench Press', 'Bottoms-up Floor Press', 'Bottoms-up Bench on PB', 'Bottoms-up Trap Bar Bench Press', 'TRX Push Ups', 'Push Ups on PB', 'Foam Roller DB Bench', 'Foam Roller SA DB Bench', 'DB Bench on PB', 'DB Incline Bench Press', 'DB SA Incline Bench Press', 'Bottoms-up Incline Bench Press'],
    stabilityHorizontalPush: ['Bottoms-up Bench Press', 'Bottoms-up Floor Press', 'Bottoms-up Bench on PB', 'Bottoms-up Trap Bar Bench Press', 'TRX Push Ups', 'Push Ups on PB', 'Foam Roller DB Bench', 'Foam Roller SA DB Bench', 'DB Bench on PB', 'DB SA Bench on PB', 'Bottoms-up Incline Bench Press'],
    horizontalPull: ['Prone Incline DB Row', 'Bent Over Barbell Row', 'Seated Cable Row', 'Trap Bar Bent Over Row', 'Sprinter Inverted Rows', 'Tripod DB Rows', 'High Plank DB Rows', 'Split Stance (Rear foot on chaos band) RDL + Barbell Row', 'SA TRX Rows', 'SA Seated Cable Row', 'SL Inverted Rows', 'SA SL Inverted Rows', 'SL Bent Over Barbell Rows', 'SL Bent Over DB Rows', 'SL SA Bent Over DB Rows', 'Bird Dog Rows', 'Kickstand Bent Over Barbell Rows', 'Kickstand Bent Over DB Rows', 'Kickstand Bent Over SA Rows'],
    coreHorizontalPull: ['SA TRX Rows', 'Tripod DB Rows', 'High Plank DB Rows', 'SA Seated Cable Row', 'SA SL Inverted Rows', 'SL SA Bent Over DB Rows', 'Bird Dog Rows', 'Kickstand Bent Over SA Rows'],
    stabilityHorizontalPull: ['SL Inverted Rows', 'SA SL Inverted Rows', 'SA Inverted Rows', 'SL Bent Over Barbell Rows', 'SL Bent Over DB Rows', 'SL SA Bent Over DB Rows', 'Bird Dog Rows', 'Kickstand Bent Over Barbell Rows', 'Kickstand Bent Over DB Rows', 'Kickstand Bent Over SA Rows'],
    isolation: ['Barbell Curls', 'Standing DB Curls', 'Concentration Curls', 'Sprinter Glute Bridge', 'SL Ham Curl w/ slider', 'PB Ham Curls', 'Ham Curls w/ sliders', 'Nordic Ham Curls', 'ISO Split Squat + KB Lateral Raises', 'Reverse Nordic Curls', 'DB Tricep Kickback', 'Cable Rope Tricep Pushdowns', 'Cable Rope OH Tricep Extensions', 'Standing Calf Raises', 'Standing SL Calf Raises', 'Toe Taps', 'Weighted SL Glute Bridges', 'Cable Chest Flys', 'Band Chaos Sprinter Glute Bridge', 'SL ISO Glute Bridge Hold on Slider w/ Knee Drive'],
    gluteBridge: ['Sprinter Glute Bridge', 'Weighted SL Glute Bridge', 'Sprinter Glute Bridge on Chaos Band', 'Weighted Glute Bridge'],
    antiExtension: ['SL Plank PB Rollouts', 'Low Plank', 'High Plank', 'Ab Wheel Rollouts', 'Stir the Pot', 'SA Plank', 'Hollow Body Hold', 'Hollow Body Rocks', 'Dead Bugs', 'Contralateral Dead Bugs', 'Side Plank', 'Copenhagen Plank', 'Forward Palloff Press', 'OH Palloff Press', 'Bird Dog Plank', 'Quadruped Plank (hands on sliders) Rollouts'],
    lowerWarmUp: ['Mini Band Lateral Walk', 'Mini Band Glute Bridge', 'Mini Band Monster Walk', 'Mini Band Clamshells', 'Mini Band Standing Clamshells', 'Mini Band Squats', 'Mini Band Stationary Hip Abductions', 'Mini Band Static Glute Bridge Abductions'],
    upperWarmUp: ['Band W Pulls', 'Y-cuffs', 'Prone OH Press', 'Ant Band OH Press', 'Band Snow Angels', 'Bent Over DB W Pulls', 'Prone Incline DB W Pulls', 'Band ATWYs'],
    balance: ['SL Balance', 'SL Balance on Pad', 'SL Balance on Disc', 'SL Balance w/ Head Swivels', 'SL Balance on Pad w/ Head Swivels', 'SL Balance on Disc w/ Head Swivels', 'SL Balance w/ Eyes Closed', 'SL Balance on Pad w/ Eyes Closed', 'SL Balance on Disc w/ Eyes Closed', 'DB Weighted SL Balance on Floor']
};

function generateTemplate() {
    return Math.floor(Math.random() * 10);
};

function generateExercise(array) {
    return array[Math.floor(Math.random() * array.length)];
};

function checkForExercise(array, ex) {
    return array.includes(ex);
};

function gatherWorkout() {
    const template = generateTemplate();
    const warmUpA = generateExercise(exerciseBank.lowerWarmUp);
    const warmUpB = generateExercise(exerciseBank.upperWarmUp);
    const warmUpC = generateExercise(exerciseBank.balance);

    if (template === 0) {
        const ex1 = generateExercise(exerciseBank.squat);
        const ex2 = generateExercise(exerciseBank.horizontalPull);
        const ex3 = generateExercise(exerciseBank.horizontalPush);
        const ex4 = generateExercise(exerciseBank.hinge);
        const ex5 = generateExercise(exerciseBank.lunge);
        const ex6 = generateExercise(exerciseBank.verticalPull);
        const ex7 = generateExercise(exerciseBank.verticalPush);
        const ex8 = generateExercise(exerciseBank.isolation);

        const ex1Reps = Math.floor(Math.random() * 5 + 2);
        const ex2Reps = Math.floor(Math.random() * 4 + 4);
        const ex3Reps = Math.floor(Math.random() * 5 + 2);
        const ex4Reps = Math.floor(Math.random() * 3 + 3);
        const ex5Reps = Math.floor(Math.random() * 4 + 3);
        const ex6Reps = Math.floor(Math.random() * 4 + 4);
        const ex7Reps = Math.floor(Math.random() * 4 + 3);
        const ex8Reps = Math.floor(Math.random() * 5 + 8);

        console.log('');
        console.log('Basic Routine - Squat, Horizontal Push & Pull Focused');
        console.log('');
        console.log(`W1: ${warmUpA} - 2 x 10`);
        console.log(`W2: ${warmUpB} - 2 x 10`);
        console.log(`W3: ${warmUpC} - 2 x 20 seconds`);
        console.log('');
        console.log(`A1: ${ex1} - 2 x ${ex1Reps}`);
        console.log(`A2: ${ex2} - 2 x ${ex2Reps}`);
        console.log(`A3: ${ex3} - 2 x ${ex3Reps}`);
        console.log('');
        console.log(`B1: ${ex4} - 2 x ${ex4Reps}`);
        console.log(`B2: ${ex5} - 2 x ${ex5Reps}`);
        console.log('');
        console.log(`C1: ${ex6} - 2 x ${ex6Reps}`);
        console.log(`C2: ${ex7} - 2 x ${ex7Reps}`);
        console.log('');
        console.log(`Optional: ${ex8} - 2 x ${ex8Reps}`);
        console.log('');
    };

    if (template === 1) {
        const ex1 = generateExercise(exerciseBank.squat);
        const ex2 = generateExercise(exerciseBank.verticalPull);
        const ex3 = generateExercise(exerciseBank.verticalPush);
        const ex4 = generateExercise(exerciseBank.horizontalPull);
        const ex5 = generateExercise(exerciseBank.horizontalPush);
        const ex6 = generateExercise(exerciseBank.lunge);
        const ex7 = generateExercise(exerciseBank.hinge);
        const ex8 = generateExercise(exerciseBank.isolation);

        const ex1Reps = Math.floor(Math.random() * 4 + 3);
        const ex2Reps = Math.floor(Math.random() * 3 + 4);
        const ex3Reps = Math.floor(Math.random() * 4 + 3);
        const ex4Reps = Math.floor(Math.random() * 2 + 4);
        const ex5Reps = Math.floor(Math.random() * 3 + 4);
        const ex6Reps = Math.floor(Math.random() * 4 + 3);
        const ex7Reps = Math.floor(Math.random() * 3 + 3);
        const ex8Reps = Math.floor(Math.random() * 5 + 8);

        console.log('');
        console.log('Basic Routine - Squat, Vertical Push & Pull Focused');
        console.log('');
        console.log(`W1: ${warmUpA} - 2 x 10`);
        console.log(`W2: ${warmUpB} - 2 x 10`);
        console.log(`W3: ${warmUpC} - 2 x 20 seconds`);
        console.log('');
        console.log(`A1: ${ex1} - 2 x ${ex1Reps}`);
        console.log(`A2: ${ex2} - 2 x ${ex2Reps}`);
        console.log(`A3: ${ex3} - 2 x ${ex3Reps}`);
        console.log('');
        console.log(`B1: ${ex4} - 2 x ${ex4Reps}`);
        console.log(`B2: ${ex5} - 2 x ${ex5Reps}`);
        console.log('');
        console.log(`C1: ${ex6} - 2 x ${ex6Reps}`);
        console.log(`C2: ${ex7} - 2 x ${ex7Reps}`);
        console.log('');
        console.log(`Optional: ${ex8} - 2 x ${ex8Reps}`);
        console.log('');
    };

    if (template === 2) {
        const ex1 = generateExercise(exerciseBank.lunge);
        const ex2 = generateExercise(exerciseBank.horizontalPull);
        const ex3 = generateExercise(exerciseBank.horizontalPush);
        const ex4 = generateExercise(exerciseBank.hinge);
        const ex5 = generateExercise(exerciseBank.squat);
        const ex6 = generateExercise(exerciseBank.verticalPull);
        const ex7 = generateExercise(exerciseBank.verticalPush);
        const ex8 = generateExercise(exerciseBank.isolation);

        const ex1Reps = Math.floor(Math.random() * 3 + 4);
        const ex2Reps = Math.floor(Math.random() * 4 + 4);
        const ex3Reps = Math.floor(Math.random() * 4 + 3);
        const ex4Reps = Math.floor(Math.random() * 3 + 3);
        const ex5Reps = Math.floor(Math.random() * 5 + 2);
        const ex6Reps = Math.floor(Math.random() * 3 + 4);
        const ex7Reps = Math.floor(Math.random() * 4 + 3);
        const ex8Reps = Math.floor(Math.random() * 5 + 8);

        console.log('');
        console.log('Basic Routine - Lunge, Horizontal Push & Pull Focused');
        console.log('');
        console.log(`W1: ${warmUpA} - 2 x 10`);
        console.log(`W2: ${warmUpB} - 2 x 10`);
        console.log(`W3: ${warmUpC} - 2 x 20 seconds`);
        console.log('');
        console.log(`A1: ${ex1} - 2 x ${ex1Reps}`);
        console.log(`A2: ${ex2} - 2 x ${ex2Reps}`);
        console.log(`A3: ${ex3} - 2 x ${ex3Reps}`);
        console.log('');
        console.log(`B1: ${ex4} - 2 x ${ex4Reps}`);
        console.log(`B2: ${ex5} - 2 x ${ex5Reps}`);
        console.log('');
        console.log(`C1: ${ex6} - 2 x ${ex6Reps}`);
        console.log(`C2: ${ex7} - 2 x ${ex7Reps}`);
        console.log('');
        console.log(`Optional: ${ex8} - 2 x ${ex8Reps}`);
        console.log('');
    };

    if (template === 3) {
        const ex1 = generateExercise(exerciseBank.gluteBridge);
        const ex2 = generateExercise(exerciseBank.hinge);
        const ex3 = generateExercise(exerciseBank.squat);
        const ex4 = generateExercise(exerciseBank.horizontalPull);
        const ex5 = generateExercise(exerciseBank.horizontalPush);
        const ex6 = generateExercise(exerciseBank.lunge);
        const ex7 = generateExercise(exerciseBank.verticalPull);
        const ex8 = generateExercise(exerciseBank.verticalPush);
        const ex9 = generateExercise(exerciseBank.isolation);

        const ex1Reps = Math.floor(Math.random() * 4 + 5);
        const ex2Reps = Math.floor(Math.random() * 4 + 3);
        const ex3Reps = Math.floor(Math.random() * 4 + 3);
        const ex4Reps = Math.floor(Math.random() * 3 + 4);
        const ex5Reps = Math.floor(Math.random() * 3 + 3);
        const ex6Reps = Math.floor(Math.random() * 3 + 4);
        const ex7Reps = Math.floor(Math.random() * 3 + 4);
        const ex8Reps = Math.floor(Math.random() * 4 + 3);
        const ex9Reps = Math.floor(Math.random() * 5 + 8);

        console.log('');
        console.log('Basic Routine - Hip Hinge Focused');
        console.log('');
        console.log(`W1: ${warmUpA} - 2 x 10`);
        console.log(`W2: ${warmUpB} - 2 x 10`);
        console.log(`W3: ${warmUpC} - 2 x 20 seconds`);
        console.log('');
        console.log(`A1: ${ex1} - 2 x ${ex1Reps}`);
        console.log(`A2: ${ex2} - 2 x ${ex2Reps}`);
        console.log('');
        console.log(`B1: ${ex3} - 2 x ${ex3Reps}`);
        console.log(`B2: ${ex4} - 2 x ${ex4Reps}`);
        console.log(`B3: ${ex5} - 2 x ${ex5Reps}`);
        console.log('');
        console.log(`C1: ${ex6} - 2 x ${ex6Reps}`);
        console.log(`C2: ${ex7} - 2 x ${ex7Reps}`);
        console.log(`C3: ${ex8} - 2 x ${ex8Reps}`);
        console.log('');
        console.log(`Optional: ${ex9} - 2 x ${ex9Reps}`);
        console.log('');
    };

    if (template === 4) {
        const ex1 = generateExercise(exerciseBank.horizontalPull);
        const ex2 = generateExercise(exerciseBank.horizontalPush);
        const ex3 = generateExercise(exerciseBank.verticalPull);
        const ex4 = generateExercise(exerciseBank.verticalPush);
        const ex5 = generateExercise(exerciseBank.squat);
        const ex6 = generateExercise(exerciseBank.lunge);
        const ex7 = generateExercise(exerciseBank.hinge);
        const ex8 = generateExercise(exerciseBank.isolation);

        const ex1Reps = Math.floor(Math.random() * 4 + 4);
        const ex2Reps = Math.floor(Math.random() * 5 + 2);
        const ex3Reps = Math.floor(Math.random() * 4 + 4);
        const ex4Reps = Math.floor(Math.random() * 4 + 3);
        const ex5Reps = Math.floor(Math.random() * 3 + 3);
        const ex6Reps = Math.floor(Math.random() * 3 + 3);
        const ex7Reps = Math.floor(Math.random() * 3 + 3);
        const ex8Reps = Math.floor(Math.random() * 5 + 8);

        console.log('');
        console.log('Basic Routine - Upper Body Focused');
        console.log('');
        console.log(`W1: ${warmUpA} - 2 x 10`);
        console.log(`W2: ${warmUpB} - 2 x 10`);
        console.log(`W3: ${warmUpC} - 2 x 20 seconds`);
        console.log('');
        console.log(`A1: ${ex1} - 2 x ${ex1Reps}`);
        console.log(`A2: ${ex2} - 2 x ${ex2Reps}`);
        console.log('');
        console.log(`B1: ${ex3} - 2 x ${ex3Reps}`);
        console.log(`B2: ${ex4} - 2 x ${ex4Reps}`);
        console.log('');
        console.log(`C1: ${ex5} - 2 x ${ex5Reps}`);
        console.log(`C2: ${ex6} - 2 x ${ex6Reps}`);
        console.log(`C3: ${ex7} - 2 x ${ex7Reps}`);
        console.log('');
        console.log(`Optional: ${ex8} - 2 x ${ex8Reps}`);
        console.log('');
    };

    if (template === 5) {
        const ex1 = generateExercise(exerciseBank.squat);
        const ex2 = generateExercise(exerciseBank.antiExtension);
        const ex3 = generateExercise(exerciseBank.lunge);
        const ex4 = generateExercise(exerciseBank.hinge);
        const ex5 = generateExercise(exerciseBank.horizontalPull);
        const ex6 = generateExercise(exerciseBank.horizontalPush);
        const ex7 = generateExercise(exerciseBank.verticalPull);
        const ex8 = generateExercise(exerciseBank.verticalPush);
        const ex9 = generateExercise(exerciseBank.isolation);

        const ex1Reps = Math.floor(Math.random() * 3 + 3);
        const ex2Reps = Math.floor(Math.random() * 3 + 2);
        const ex3Reps = Math.floor(Math.random() * 3 + 4);
        const ex4Reps = Math.floor(Math.random() * 3 + 3);
        const ex5Reps = Math.floor(Math.random() * 2 + 5);
        const ex6Reps = Math.floor(Math.random() * 3 + 4);
        const ex7Reps = Math.floor(Math.random() * 2 + 5);
        const ex8Reps = Math.floor(Math.random() * 2 + 4);
        const ex9Reps = Math.floor(Math.random() * 5 + 8);

        console.log('');
        console.log('Basic Routine - Lower Body Focused');
        console.log('');
        console.log(`W1: ${warmUpA} - 2 x 10`);
        console.log(`W2: ${warmUpB} - 2 x 10`);
        console.log(`W3: ${warmUpC} - 2 x 20 seconds`);
        console.log('');
        console.log(`A1: ${ex1} - 2 x ${ex1Reps}`);
        console.log(`A2: ${ex2} - 2 x ${ex2Reps}0 seconds`);
        console.log('');
        console.log(`B1: ${ex3} - 2 x ${ex3Reps}`);
        console.log(`B2: ${ex4} - 2 x ${ex4Reps}`);
        console.log('');
        console.log(`C1: ${ex5} - 2 x ${ex5Reps}`);
        console.log(`C2: ${ex6} - 2 x ${ex6Reps}`);
        console.log('');
        console.log(`D1: ${ex7} - 2 x ${ex7Reps}`);
        console.log(`D2: ${ex8} - 2 x ${ex8Reps}`);
        console.log('');
        console.log(`Optional: ${ex9} - 2 x ${ex9Reps}`);
        console.log('');
    };

    if (template === 6) {
        const ex1 = generateExercise(exerciseBank.antiExtension);
        const ex2 = generateExercise(exerciseBank.antSquat);
        const ex3 = generateExercise(exerciseBank.coreHorizontalPull);
        const ex4 = generateExercise(exerciseBank.horizontalPush);
        const ex5 = generateExercise(exerciseBank.antLunge);
        const ex6 = generateExercise(exerciseBank.coreHinge);
        const ex7 = generateExercise(exerciseBank.coreVerticalPull);
        const ex8 = generateExercise(exerciseBank.coreVerticalPush);
        const ex9 = generateExercise(exerciseBank.isolation);

        const ex1Reps = Math.floor(Math.random() * 3 + 2);
        const ex2Reps = Math.floor(Math.random() * 3 + 4);
        const ex3Reps = Math.floor(Math.random() * 2 + 5);
        const ex4Reps = Math.floor(Math.random() * 3 + 4);
        const ex5Reps = Math.floor(Math.random() * 2 + 4);
        const ex6Reps = Math.floor(Math.random() * 3 + 4);
        const ex7Reps = Math.floor(Math.random() * 2 + 5);
        const ex8Reps = Math.floor(Math.random() * 2 + 4);
        const ex9Reps = Math.floor(Math.random() * 5 + 8);

        console.log('');
        console.log('Core Focused Day');
        console.log('');
        console.log(`W1: ${warmUpA} - 2 x 10`);
        console.log(`W2: ${warmUpB} - 2 x 10`);
        console.log(`W3: ${warmUpC} - 2 x 20 seconds`);
        console.log('');
        console.log(`A1: ${ex1} - 2 x ${ex1Reps}0 seconds`);
        console.log(`A2: ${ex2} - 2 x ${ex2Reps}`);
        console.log('');
        console.log(`B1: ${ex3} - 2 x ${ex3Reps}`);
        console.log(`B2: ${ex4} - 2 x ${ex4Reps}`);
        console.log('');
        console.log(`C1: ${ex5} - 2 x ${ex5Reps}`);
        console.log(`C2: ${ex6} - 2 x ${ex6Reps}`);
        console.log('');
        console.log(`D1: ${ex7} - 2 x ${ex7Reps}`);
        console.log(`D2: ${ex8} - 2 x ${ex8Reps}`);
        console.log('');
        console.log(`Optional: ${ex9} - 2 x ${ex9Reps}`);
        console.log('');
    };

    if (template === 7) {
        const ex1 = generateExercise(exerciseBank.balance);
        const ex2 = generateExercise(exerciseBank.stabilitySquat);
        const ex3 = generateExercise(exerciseBank.stabilityHorizontalPull);
        const ex4 = generateExercise(exerciseBank.stabilityHorizontalPush);
        const ex5Start = generateExercise(exerciseBank.lunge);
        const ex5End = generateExercise(exerciseBank.stabilityLunge);
        const ex6 = generateExercise(exerciseBank.stabilityHinge);
        const ex7 = generateExercise(exerciseBank.singleArmVerticalPull);
        const ex8 = generateExercise(exerciseBank.coreVerticalPush);
        const ex9 = generateExercise(exerciseBank.isolation);

        const ex1Reps = Math.floor(Math.random() * 3 + 2);
        const ex2Reps = Math.floor(Math.random() * 3 + 4);
        const ex3Reps = Math.floor(Math.random() * 2 + 5);
        const ex4Reps = Math.floor(Math.random() * 3 + 4);
        const ex5Reps = Math.floor(Math.random() * 2 + 4);
        const ex6Reps = Math.floor(Math.random() * 3 + 4);
        const ex7Reps = Math.floor(Math.random() * 2 + 5);
        const ex8Reps = Math.floor(Math.random() * 2 + 4);
        const ex9Reps = Math.floor(Math.random() * 5 + 8);

        console.log('');
        console.log('Stabilization and Balance Focused Day');
        console.log('');
        console.log(`W1: ${warmUpA} - 2 x 10`);
        console.log(`W2: ${warmUpB} - 2 x 10`);
        console.log(`W3: ${warmUpC} - 2 x 20 seconds`);
        console.log('');
        console.log(`A1: ${ex1} - 2 x ${ex1Reps}0 seconds`);
        console.log(`A2: ${ex2} - 2 x ${ex2Reps}`);
        console.log('');
        console.log(`B1: ${ex3} - 2 x ${ex3Reps}`);
        console.log(`B2: ${ex4} - 2 x ${ex4Reps}`);
        console.log('');
        console.log(`C1: ${ex5Start} ${ex5End} - 2 x ${ex5Reps}`);
        console.log(`C2: ${ex6} - 2 x ${ex6Reps}`);
        console.log('');
        console.log(`D1: ${ex7} - 2 x ${ex7Reps}`);
        console.log(`D2: ${ex8} - 2 x ${ex8Reps}`);
        console.log('');
        console.log(`Optional: ${ex9} - 2 x ${ex9Reps}`);
        console.log('');
    };

    if (template === 8) {
        const ex1 = generateExercise(exerciseBank.squat);
        const ex2 = generateExercise(exerciseBank.horizontalPull);
        const ex3 = generateExercise(exerciseBank.horizontalPush);
        const ex4 = generateExercise(exerciseBank.hinge);
        const ex5 = generateExercise(exerciseBank.lunge);
        const ex6 = generateExercise(exerciseBank.verticalPull);
        const ex7 = generateExercise(exerciseBank.verticalPush);
        const ex8 = generateExercise(exerciseBank.isolation);

        const ex1Reps = Math.floor(Math.random() * 4 + 2);
        const ex2Reps = Math.floor(Math.random() * 2 + 4);
        const ex3Reps = Math.floor(Math.random() * 3 + 2);
        const ex4Reps = Math.floor(Math.random() * 2 + 3);
        const ex5Reps = Math.floor(Math.random() * 3 + 3);
        const ex6Reps = Math.floor(Math.random() * 3 + 4);
        const ex7Reps = Math.floor(Math.random() * 3 + 3);
        const ex8Reps = Math.floor(Math.random() * 5 + 8);

        console.log('');
        console.log('Speed and Power Day');
        console.log('');
        console.log(`W1: ${warmUpA} - 2 x 10`);
        console.log(`W2: ${warmUpB} - 2 x 10`);
        console.log(`W3: ${warmUpC} - 2 x 20 seconds`);
        console.log('');
        console.log(`A1: ${ex1} Jumps - 2 x ${ex1Reps}`);
        console.log(`A2: ${ex2} - 2 x ${ex2Reps}`);
        console.log(`A3: ${ex3} - 2 x ${ex3Reps}`);
        console.log('');
        console.log(`B1: ${ex4} Jumps - 2 x ${ex4Reps}`);
        console.log(`B2: ${ex5} Jumps - 2 x ${ex5Reps}`);
        console.log('');
        console.log(`C1: ${ex6} - 2 x ${ex6Reps}`);
        console.log(`C2: ${ex7} - 2 x ${ex7Reps}`);
        console.log('');
        console.log(`Optional: ${ex8} - 2 x ${ex8Reps}`);
        console.log('');
    };

    if (template === 9) {
        const ex1 = generateExercise(exerciseBank.squat);
        const ex2 = generateExercise(exerciseBank.horizontalPull);
        const ex3 = generateExercise(exerciseBank.horizontalPush);
        const ex4 = generateExercise(exerciseBank.hinge);
        const ex5 = generateExercise(exerciseBank.lunge);
        const ex6 = generateExercise(exerciseBank.verticalPull);
        const ex7 = generateExercise(exerciseBank.verticalPush);
        const ex8 = generateExercise(exerciseBank.isolation);

        const ex1Reps = Math.floor(Math.random() * 4 + 5);
        const ex2Reps = Math.floor(Math.random() * 3 + 7);
        const ex3Reps = Math.floor(Math.random() * 4 + 5);
        const ex4Reps = Math.floor(Math.random() * 2 + 7);
        const ex5Reps = Math.floor(Math.random() * 3 + 6);
        const ex6Reps = Math.floor(Math.random() * 2 + 8);
        const ex7Reps = Math.floor(Math.random() * 2 + 6);
        const ex8Reps = Math.floor(Math.random() * 5 + 8);

        console.log('');
        console.log('Endurance and Conditioning Day');
        console.log('');
        console.log(`W1: ${warmUpA} - 2 x 10`);
        console.log(`W2: ${warmUpB} - 2 x 10`);
        console.log(`W3: ${warmUpC} - 2 x 20 seconds`);
        console.log('');
        console.log(`A1: ${ex1} - 2 x ${ex1Reps}`);
        console.log(`A2: ${ex2} - 2 x ${ex2Reps}`);
        console.log(`A3: ${ex3} - 2 x ${ex3Reps}`);
        console.log('');
        console.log(`B1: ${ex4} - 2 x ${ex4Reps}`);
        console.log(`B2: ${ex5} - 2 x ${ex5Reps}`);
        console.log('');
        console.log(`C1: ${ex6} - 2 x ${ex6Reps}`);
        console.log(`C2: ${ex7} - 2 x ${ex7Reps}`);
        console.log('');
        console.log(`Optional: ${ex8} - 2 x ${ex8Reps}`);
        console.log('');
    };
};

gatherWorkout();