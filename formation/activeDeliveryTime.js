// fn:
//   - active_pickup_count = 0
//   - start_time = 0
//   - active_time = 0

//   - iterate through orders
//       - order_id, order_time, event_type = 
//       - if pickup
//         - if active_pickup_count == 0:
//             - start_time = order_time
//         - make active_pickup_count += 1

//       - if dropoff
//         - active_pickup_count -= 1
//         - if active_pickup_count == 0:
//             - active_time += (order_time - start_time)

//   return active_timea

// **Follow-up**
// Now, let's say the input is not guaranteed to be valid. What are some ways that the input could be invalid?

// - Timestamps are not increasing
// - A pickup is dropped off an incorrect number of times (0 or 2+ times)
// - A dropoff occurs before a pickup, or the pickup does not exist

// For any pickups and dropoffs that are invalid, ignore them entirely/return -1. Add one restriction at a time and have their code test for that condition.

// function activeDeliveryTime(events) {
//   let activePickupCount = 0;
//   let startTime = 0;
//   let activeTime = 0;

//   for (const [_, orderTime, event] of events) {
//     if (event === 0) {
//       if (activePickupCount === 0) {
//         startTime = orderTime;
//       }
//       activePickupCount++;
//     }

//     if (event === 1) {
//       activePickupCount--;
//       if (activePickupCount === 0) {
//         activeTime += (orderTime - startTime);
//         startTime = 0;
//       }
//     }
//   }

//   return activeTime;

// }

function activeDeliveryTime(events) {
  let activePickupCount = 0;
  let startTime = 0;
  let activeTime = 0;

  const eventMap = new Map();

  for (const [orderId, orderTime, event] of events) {
    if (event === 0) {
      if (eventMap.has(orderId)) {
        return -1;
      }
      eventMap.set(orderId, orderTime);
      if (activePickupCount === 0) {
        startTime = orderTime;
      }
      activePickupCount++;
    }

    if (event === 1) {
      const eventStartTime = eventMap.get(orderId);
      if (!eventStartTime || orderTime <= eventStartTime) {
        return -1;
      }
      activePickupCount--;
      if (activePickupCount === 0) {
        activeTime += (orderTime - startTime);
        startTime = 0;
      }
    }
  }

  return activeTime;

}

console.log(activeDeliveryTime([]) === 0);

console.log(activeDeliveryTime(
  [
    [1, 1591846068, 0],
    [1, 1591846072, 1]
  ]) === 4);  // Expected output: true

console.log(activeDeliveryTime(
  [
    [1, 1591846068, 0],
    [1, 1591846067, 1]
  ]) === -1);  // Expected output: true

  console.log(activeDeliveryTime( // multiple invalid pickups
  [
    [1, 1591846068, 0],
    [1, 1591846067, 0]
    ]) === -1); 

  console.log(activeDeliveryTime( // multiple invlaid delivery
  [
    [1, 1591846068, 1],
    [1, 1591846067, 1]
    ]) === -1); 

  

console.log(activeDeliveryTime(
    [
        [1, 1591846068, 0],
        [1, 1591846072, 1],
        [2, 1591846073, 0],
        [2, 1591846078, 1]
    ]) === 9);  // Expected output: true

console.log(activeDeliveryTime(
    [
        [1, 1591846068, 0],
        [2, 1591846070, 0],
        [1, 1591846072, 1],
        [2, 1591846078, 1]
    ]) === 10);  // Expected output: true

console.log(activeDeliveryTime(
    [
        [1, 1591846068, 0],
        [2, 1591846070, 0],
        [1, 1591846071, 1],
        [2, 1591846080, 1],
        [3, 1591846090, 0],
        [3, 1591846102, 1],
    ]) === 24);  // Expected output: true

console.log(activeDeliveryTime([[1, 1591846068, 0]]) === 0); 
console.log(activeDeliveryTime([[1, 1591846072, 1]]) === -1); 
