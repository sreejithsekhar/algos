// You open up your computer's downloads folder, looking for that cute video of Oliver barking at the doorbell you downloaded a few weeks ago. Of course, 
// it's mixed in with all of the other silly otter videos and other stuff you just had to save. To make it easier to find, 
// you click on the column to sort the view by date to see the most recent first, at the top.
// For this problem, we're going to implement that file system sort by date. The files themselves are represented by objects:
// {
// "filename": <string>,
// "size": <number>,
// "date": <string>}</string></number></string>
// and the date itself is in US format:
// MM-DD-YYYY HH:MM:SS
// Write a function that sorts an array of these file objects, with the most recent at the top.
// Follow-up:
// What happens if a date like 2 Feb 2021 is compared with 12 Nov 2021 and the day and month don't have leading zeros: 2-2-2021? How can the code be modified to handle this?
// If the dates are tied down to the second, add a secondary sort by file name in descending order.
// Example(s)
// Input: sortFiles([
// {"filename": "otter.mpeg", "size": 512, "date": "01-16-2023 14:23:13"},
// {"filename": "oliver.mp4", "size": 1024, "date": "01-18-2023 12:46:57"},
// ])
// Output: [
// {"filename": "oliver.mp4", "size": 1024, "date": "01-18-2023 12:46:57"},
// {"filename": "otter.mpeg", "size": 512, "date": "01-16-2023 14:23:13"},
// ]

function sortFiles(files) {
    files.sort((a, b) => {
        const offset = new Date(a.date).getTime() - new Date(b.date).getTime();
        if (offset === 0) {
            return a.filename.localeCompare(b.filename);
        }
        return offset;
    });

    return files;
}

// Feedback:
// 1. Sort direction is wrong. The prompt says "most recent at the top," matching the example
//    (oliver 01-18 before otter 01-16). `a - b` gives oldest first; you want `b - a`.
// 2. Secondary sort direction. The follow-up asks for filename in descending order, but
//    `a.filename.localeCompare(b.filename)` is ascending.
// 3. Follow-up about leading zeros is unaddressed. The third test case already has "1-18-2023"
//    — V8 happens to parse it, but the follow-up wants explicit handling so it works in any
//    engine (including ones that reject non-padded M-D-YYYY).
// 4. Date object created twice per comparison. Minor, but for an N log N comparator each file's
//    Date is reconstructed many times. Easy to precompute once per file before sorting.
// 5. Mutation. `sort` mutates the input array. Depending on the interviewer's taste, returning
//    a sorted copy (`[...files].sort(...)`) is sometimes preferred.

console.log(sortFiles([
    { "filename": "otter.mpeg", "size": 512, "date": "01-16-2023 14:23:13" },
    { "filename": "oliver.mp4", "size": 1024, "date": "1-18-2023 12:46:57" },
    { "filename": "foobar.mpeg", "size": 512, "date": "01-16-2023 14:23:13" },
]));

console.log(sortFiles([
   
]));

console.log(sortFiles([
    { "filename": "otter.mpeg", "size": 512, "date": "01-16-2023 14:23:13" },
]));