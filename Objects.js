// ============================================================================
// ==          JavaScript Object Iteration: Test Cases & Examples          ==
// ==                  Current Date: Monday, June 10, 2025                 ==
// ============================================================================

// --- Shared Data Object ---
// This object will be used for all test cases below.
const userProfile = {
  username: 'dev_jane',
  score: 185,
  isAdmin: false,
  lastLogin: '2025-06-09T10:00:00Z'
};

console.log('--- Starting Object Iteration Examples ---');
console.log('Using initial data:', userProfile);


// ============================================================================
// == 1. The Modern Standard: `for...of` with `Object.entries()`
// ============================================================================

console.log('\n--- Test Case 1: Log each key-value pair to the console. ---');

/**
 * Iterates through the userProfile object and logs each property and its value
 * in a "Property: [key], Value: [value]" format.
 */
function logAllProperties(profile) {
  for (const [key, value] of Object.entries(profile)) {
    console.log(`Property: ${key}, Value: ${value}`);
  }
}

logAllProperties(userProfile);

/*
--- Expected Output for Test Case 1 ---
Running Test 1...
Property: username, Value: dev_jane
Property: score, Value: 185
Property: isAdmin, Value: false
Property: lastLogin, Value: 2025-06-09T10:00:00Z
*/


// ============================================================================
// == 2. The Functional Approach: `.filter()` and `Object.fromEntries()`
// ============================================================================

console.log('\n--- Test Case 2: Create a new object without boolean properties. ---');

/**
 * Creates a new "public" profile by filtering out any properties that
 * have a boolean value.
 * @param {object} profile - The original user profile object.
 * @returns {object} A new object with boolean properties removed.
 */
function createPublicProfile(profile) {
  console.log('Running Test 2...');
  const filteredEntries = Object.entries(profile).filter(([key, value]) => {
    return typeof value !== 'boolean';
  });
  return Object.fromEntries(filteredEntries);
}

const publicProfile = createPublicProfile(userProfile);
console.log('Result of Test 2:', publicProfile);

/*
--- Expected Output for Test Case 2 ---
Running Test 2...
Result of Test 2: {
  username: 'dev_jane',
  score: 185,
  lastLogin: '2025-06-09T10:00:00Z'
}
*/


// ============================================================================
// == 3. The Classic Method: `for...in` with a `hasOwnProperty` Guard
// ============================================================================

console.log('\n--- Test Case 3: Log all "owned" properties using the for...in loop. ---');

/**
 * Demonstrates the classic `for...in` loop while safely checking for
 * properties that belong directly to the object.
 * @param {object} profile - The object to iterate over.
 */
function logWithForIn(profile) {
  console.log('Running Test 3...');
  for (const key in profile) {
    // The guard ensures we don't log properties from the prototype chain.
    if (Object.prototype.hasOwnProperty.call(profile, key)) {
      console.log(`Key: ${key} -> Value: ${profile[key]}`);
    }
  }
}

logWithForIn(userProfile);

/*
--- Expected Output for Test Case 3 ---
Running Test 3...
Key: username -> Value: dev_jane
Key: score -> Value: 185
Key: isAdmin -> Value: false
Key: lastLogin -> Value: 2025-06-09T10:00:00Z
*/


// ============================================================================
// == 4. Value-based Aggregation: `Object.values()` and `.some()`
// ============================================================================

console.log('\n--- Test Case 4: Check if the user has a score higher than 100. ---');

/**
 * Uses Object.values() to efficiently check if any numeric value in the
 * object is greater than a given threshold.
 * @param {object} profile - The user profile object.
 * @returns {boolean} - True if a score > 100 exists, otherwise false.
 */
function hasHighScore(profile) {
  console.log('Running Test 4...');
  const values = Object.values(profile);
  return values.some(value => typeof value === 'number' && value > 100);
}

const hasHigh = hasHighScore(userProfile);
console.log('Result of Test 4 (User has score > 100):', hasHigh);

/*
--- Expected Output for Test Case 4 ---
Running Test 4...
Result of Test 4 (User has score > 100): true
*/

console.log('\n--- All test cases complete. ---');