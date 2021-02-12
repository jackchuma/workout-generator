const exerciseBank = {
    squat: ['Barbell Back Squat', 'Barbell Front Squat', 'Barbell Zercher Squat', 'DB Drop Squat', 'DB Goblet Squat', 'DB Front Curled Squat', 'Barbell Front Curled Squat', 'Barbell SL Squat', 'Bottoms-up KB + Reg KB Squat', 'Sideways Trap Bar Kickstand Squat'],
    hinge: ['Conventional Deadlift', 'Sumo Deadlift', 'Barbell RDL', 'DB RDL', 'Barbell RDL + Shrug', 'Double Barbell SL RDL + Jump', 'DB SL RDL', 'KB SL RDL + switch hands'],
    lunge: ['Barbell Split Squat', 'DB Goblet Split Squat', 'DB Split Squat', 'Barbell Reverse Lunge w/ slider', 'DB Reverse Lunge w/ slider', 'DB Lateral Lunge w/ slider', 'Zercher Reverse Lunge w/ slider', 'DB Pinch Grip Bulgarian Split Squat'],
    verticalPush: ['Standing Barbell OH Press', 'Standing DB OH Press', 'Standing DB SA OH Press', '1/2 Kneeling DB OH Press', 'Bottoms-up Split Stance OH Press'],
    verticalPull: ['Pull Up', 'Chin Up', 'Seated Lat Pulldown', 'Sprinter Pull Ups', 'Seated SA Lat Pulldown', 'Split Stance SA Lat Pulldown'],
    horizontalPush: ['Barbell Bench Press', 'DB Bench Press', 'Barbell Incline Bench Press', 'Barbell Floor Press', 'DB Floor Press', 'Push Up', 'Iso Glute Bridge DB Bench Press (T-spine on bench)', 'SL Push Ups foot on med ball', 'Diamond Push Ups'],
    horizontalPull: ['Prone Incline DB Row', 'Bent Over Barbell Row', 'Seated Cable Row', 'Trap Bar Bent Over Row', 'Sprinter Inverted Rows', 'Tripod DB Rows', 'High Plank DB Rows'],
    isolation: ['Barbell Curls', 'Standing DB Curls', 'Concentration Curls', 'Sprinter Glute Bridge', 'SL Ham Curl w/ slider', 'PB Ham Curls', 'Ham Curls w/ sliders', 'Nordic Ham Curls', 'ISO Split Squat + KB Lateral Raises', 'Reverse Nordic Curls', 'DB Tricep Kickback', 'Cable Rope Tricep Pushdowns', 'Cable Rope OH Tricep Extensions', 'Standing Calf Raises', 'Standing SL Calf Raises', 'Toe Taps', 'Weighted SL Glute Bridges', 'Cable Chest Flys']
};

function generateTemplate() {
    return Math.floor(Math.random() * 2);
};

function generateExercise(array) {
    return array[Math.floor(Math.random() * array.length)];
};

function checkForExercise(array, ex) {
    return array.includes(ex);
};

function gatherWorkout() {
    const template = generateTemplate();

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

        console.log(`A1: ${ex1} - 2 x ${ex1Reps}`);
        console.log(`A2: ${ex2} - 2 x ${ex2Reps}`);
        console.log(`A3: ${ex3} - 2 x ${ex3Reps}`);
        console.log(`B1: ${ex4} - 2 x ${ex4Reps}`);
        console.log(`B2: ${ex5} - 2 x ${ex5Reps}`);
        console.log(`C1: ${ex6} - 2 x ${ex6Reps}`);
        console.log(`C2: ${ex7} - 2 x ${ex7Reps}`);
        console.log(`Optional: ${ex8} - 2 x ${ex8Reps}`);
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

        console.log(`A1: ${ex1} - 2 x ${ex1Reps}`);
        console.log(`A2: ${ex2} - 2 x ${ex2Reps}`);
        console.log(`A3: ${ex3} - 2 x ${ex3Reps}`);
        console.log(`B1: ${ex4} - 2 x ${ex4Reps}`);
        console.log(`B2: ${ex5} - 2 x ${ex5Reps}`);
        console.log(`C1: ${ex6} - 2 x ${ex6Reps}`);
        console.log(`C2: ${ex7} - 2 x ${ex7Reps}`);
        console.log(`Optional: ${ex8} - 2 x ${ex8Reps}`);
    };
};

gatherWorkout();