/*
'''
Text Editor Data Model

We're going to build the data model for a text editor that supports the basic operations needed for typing. 
This data model will take the form of a class that has methods for:
- typing one character at a time
- backspace and delete to remove text one character at a time
- moving the cursor

How can this class be designed so that the main operations are as efficient as possible?
 
All main text editing operations should be O(1).

EXAMPLE(S)
const editor = new TextEditor("Text").moveEnd();
console.log(editor.toString(), "Text");
editor.backspace();
console.log(editor.toString(), "Tex");
editor.addChar('t'). addChar(" ").addChar("E").addChar("d").addChar("i").addChar("t");
console.log(editor.toString(), "Text Edit");
editor.moveStart().delete().delete().delete().delete().delete();
console.log(editor.toString(), "Edit");

const e2 = new TextEditor("otter");
console.log(e2.toString(), "otter");
e2.backspace().backspace().backspace().backspace().backspace();
console.log(e2.toString() === "", true);
e2.addChar("a").moveBack().delete();
console.log(e2.toString() === "", true);

 
Explore
assumption all char allowed
size/limit -- unlimited

Brainstorm
index variable acts as cursor

0  1  2  3  4
h, e, , l, o 
                       <- i
h <-> e <-> l <-> l <-> o

null <-> e

h -> t -> node
         h   t
 null <'h'> <e> null


 if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

cur.next = {
val: e,
prev: head,
next: null
}
cur.next = cur

Plan

Create a Doubly LinkedList Class
Head
node = {
  value: '',
  next: null
  prev: null
}
const head = node
for loop the startring string, to place each char into a intantiated doubly linked list
  node.val = char
  
    
  }


Tests



FUNCTION SIGNATURE
class TextEditor {

  // initialize the editor, optionally with some starter text
  constructor(initialText = "") {
intilize doubly linked list
    this.dList = new DoublyLinkedList(initialText)
    this.cursor = this.dList.tail;
  }

  // remove the character before the cursor
  backspace() {
  }

  // remove the character at the cursor. Cursor moves to the
  // next character.
  delete() {
  }

  // add a new character before the cursor
  addChar(c) {
  l
       c    t
  h -> e -> l -> null
         < - l
   const node = new Node(c);
   const temp = this.cursor.next
  
    node.prev = this.cursor
    node.next = temp
    this.cursor.next = node

    this.cursor = this.cursor.next


  }

  // move the cursor back one
  
  moveBack() {
  if(this.cursor.prev){
    this.cursor = this.cursor.prev
  }
  }

  // move the cursor forward one
  moveNext() {
    if(this.cursor.next){
    this.cursor = this.cursor.next
  }
  }

  // Move the cursor to the start. A new
  // character added here will be the first.
  moveStart() {
    this.cursor = this.dList.head
  }

  // move the cursor to the end. A new
  // character here will be last.
  moveEnd() {
   this.cursor = this.dList.tail
  }

  // Return the text currently in the editor as a single string.
  // Can be O(n) in the size of the current text.
  toString() {
  }
  
}

'''
*/

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(initialText = "") {
    this.head = null;
    this.tail = null;
    this.size = 0;

    for (const ch of initialText) {
      this.append(ch);
    }
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }
}

class TextEditor {

  // initialize the editor, optionally with some starter text
  constructor(initialText = "") {
    this.dList = new DoublyLinkedList(initialText)
    this.cursor = this.dList.tail;
  }

  // remove the character before the cursor
  backspace() {
  }

  // remove the character at the cursor. Cursor moves to the
  // next character.
  delete() {
  }

  // add a new character before the cursor
  addChar(c) {a
    const node = new Node(c);
    const temp = this.cursor.next

    node.prev = this.cursor
    node.next = temp
    this.cursor.next = node

    this.cursor = this.cursor.next
    if (this.cursor.next === null) {
      this.dList.tail = this.cursor
    }
  }

  // move the cursor back one

  moveBack() {
  }

  // move the cursor forward one
  moveNext() {
  }

  // Move the cursor to the start. A new
  // character added here will be the first.
  moveStart() {
  }

  // move the cursor to the end. A new
  // character here will be last.
  moveEnd() {
  }

  // Return the text currently in the editor as a single string.
  // Can be O(n) in the size of the current text.
  toString() {
    console.log(this.dList)
  }

}

const t = new TextEditor('text');
//t.toString();

t.addChar('w');

t.toString();

console.log(t.cursor)