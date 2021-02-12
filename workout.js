const exerciseBank = {
    squat: ['Barbell Back Squat', 'Barbell Front Squat', 'Barbell Zercher Squat'],
    hinge: ['Conventional Deadlift', 'Sumo Deadlift', 'Barbell RDL'],
    lunge: ['Barbell Split Squat', 'DB Goblet Split Squat', 'DB Split Squat'],
    verticalPush: ['Standing Barbell OH Press', 'Standing DB OH Press', 'Standing DB SA OH Press'],
    verticalPull: ['Pull Up', 'Chin Up', 'Lat Pulldown'],
    horizontalPush: ['Barbell Bench Press', 'DB Bench Press', 'Barbell Incline Bench Press'],
    horizontalPull: ['Prone Incline DB Row', 'Bent Over Barbell Row', 'Seated Cable Row'],
    isolation: ['Barbell Curls', 'Standing DB Curls', 'Concentration Curls']
};

function generateTemplate() {
    return Math.floor(Math.random() * 1);
};

function generateExercise(array) {
    return array[Math.floor(Math.random() * array.length)];
}

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
};

gatherWorkout();