// You are developing software for a professional audio mixing console. The equalizer has N frequency bands, each with a current gain level represented in an array currentGains. The audio engineer wants to achieve a specific tonal profile represented in the targetGains array.
// The equalizer interface has a unique adjustment mechanism: you can select any contiguous range of frequency bands and apply a uniform adjustment of exactly +1 dB (boost) or -1 dB (cut) to all selected bands simultaneously. This is called a "band sweep adjustment."
// Given the current gain levels and target gain levels for all N frequency bands, determine the minimum number of band sweep adjustments needed to transform the current gains into the target gains.
// Example(s)
// Example 1:
// Input: currentGains = [0, 0, 0], targetGains = [1, 2, 1]
// Output: 2
// Explanation:
// - First adjustment: boost bands [0, 1, 2] by 1 dB → [1, 1, 1]
// - Second adjustment: boost band [1] by 1 dB → [1, 2, 1]
// Example 2:
// Input: currentGains = [0, 0, 0, 0], targetGains = [2, 3, 3, 2]
// Output: 3
// Explanation:
// - First adjustment: boost all bands [0,1,2,3] by 1 dB → [1, 1, 1, 1]
// - Second adjustment: boost all bands [0,1,2,3] by 1 dB → [2, 2, 2, 2]
// - Third adjustment: boost bands [1,2] by 1 dB → [2, 3, 3, 2]
// Signature/Prototype
// JavaScript:
// function minEqualizerAdjustments(currentGains, targetGains)

/*



*/