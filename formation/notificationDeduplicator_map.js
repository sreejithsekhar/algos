// Design a notification throttling service for a messaging platform.
// When users trigger events (like failed payment retries, suspicious login attempts, or system alerts), your notification service sends them updates.
// However, sending the same notification type to the same user too frequently creates a poor user experience and can appear spammy.
// Build a NotificationDeduplicator class that prevents duplicate notifications within a configurable time window:
// Constructor: Takes a window_minutes parameter that defines how long to suppress duplicate notifications
// should_send(user_id, notification_type, timestamp): Returns True if the notification should be sent, or False if it should be suppressed
// A notification is suppressed if the same user already received the same notification type within the time window
// The timestamp parameter represents minutes since the service started (for testing purposes)
// Different users can receive the same notification type independently
// Different notification types for the same user are tracked independently
// At exactly the window boundary (when current_time - last_sent_time >= window), the notification should be allowed
// Example(s)
// deduplicator = NotificationDeduplicator(10)  # 10-minute suppression window

// deduplicator.should_send("user_123", "payment_failed", 0)   # True — first notification
// deduplicator.should_send("user_123", "payment_failed", 5)   # False — same user & type, only 5 mins passed
// deduplicator.should_send("user_123", "login_alert", 5)      # True — same user, different notification type
// deduplicator.should_send("user_456", "payment_failed", 5)   # True — different user
// deduplicator.should_send("user_123", "payment_failed", 10)  # True — exactly 10 mins passed, window expired

/* Explore
validation
invalid timestamp
empty event

assumption -- no window recaclualtion

brainstorm
a -> 
    na -> timestamp
    nb
b ->
    na
map
timw  -> o(1)
space -> o(n)

plan:
initialize map and windowMinutes
when we get an event
    check if the user present:
        if not:
            add the user
            add the event with timestamp -- return true
        if present:
            if event not present:
                add the event with timestamp -- return true
            if event present:
                get the evnt
                get the timestamp
                check if timestamp >= window -- return true
                else return false


*/

class NotificationDeduplicator {
    constructor(windowMinutes) {
        this.windowMinutes = windowMinutes;
        this.notificationMap = new Map();
    }

    shouldSend(userId, notificationType, timestamp) {
        const key = `${userId}-${notificationType}`;
        if (this.notificationMap.has(key)) {
            const offset = timestamp - this.notificationMap.get(key);
            if (offset >= this.windowMinutes) {
                this.notificationMap.set(key, timestamp);
                return true
            }
        } else {
            this.notificationMap.set(key, timestamp);
            return true;
        }
        return false;
    }
}


const deduplicator = new NotificationDeduplicator(10);

console.log(deduplicator.shouldSend("user_123", "payment_failed", 0)) // True — first notification
console.log(deduplicator.shouldSend("user_123", "payment_failed", 5)) // False — same user & type, only 5 mins passed
console.log(deduplicator.shouldSend("user_123", "login_alert", 5))     // True — same user, different notification type
console.log(deduplicator.shouldSend("user_456", "payment_failed", 5))  // True — different user
console.log(deduplicator.shouldSend("user_123", "payment_failed", 10)) // True — exactly 10 mins passed, window expired