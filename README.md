# 1) What is the difference between var, let, and const?

### Var
- পুরনো জাভাস্ক্রিপ্টে ব্যবহৃত।
- Function scope এ কাজ করে।
- একই নামের ভ্যারিয়েবল একাধিকবার declare করা যায় (bug হতে পারে)।

### let
- ES6 এ এসেছে।
- Block scope (যেমন `{}` এর মধ্যে সীমাবদ্ধ)।
- একই নামের ভ্যারিয়েবল আবার declare করা যায় না।

### const
- Block scoped।
- একবার মান দিলে পরিবর্তন করা যায় না।
- তবে object বা array হলে তার ভিতরের মান পরিবর্তন করা যায়।

<hr>


# 2) What is the difference between map(), forEach(), and filter()?

### forEach()
- প্রতিটি উপাদানের জন্য একটি ফাংশন চালায়।
- কিছু return করে না।
- নতুন অ্যারে তৈরি করে না।

### map()
- প্রতিটি উপাদানে ফাংশন চালায়।
- রেজাল্ট হিসেবে একটি নতুন অ্যারে তৈরি করে।

### filter()
- শর্ত অনুযায়ী উপাদান বাছাই করে।
- একটি নতুন filtered অ্যারে return করে।

<hr>

# 3) What are arrow functions in ES6?

### Arrow function হলো ফাংশন লেখার ছোট্ট এবং আধুনিক পদ্ধতি। এটি নিজস্ব `this` রাখে না, parent scope এর `this` ব্যবহার করে।
```js
const arrow = () => console.log("Print dot output");
arrow();  // Print dot output
```
<hr>


# 4) How does destructuring assignment work in ES6?

### Destructuring দিয়ে অ্যারে বা অবজেক্ট থেকে মান সরাসরি ভ্যারিয়েবলে নেওয়া যায়।
- Default মান দেওয়া যায়।
- Nested অবজেক্ট থেকেও মান নেওয়া যায়।
- Rest operator (...) দিয়ে বাকি মান একত্রে রাখা যায়।

<hr>


# 5) Explain template literals in ES6. How are they different from string concatenation?

### Template literals হলো জাভাস্ক্রিপ্টের একটি নতুন ফিচার যা ব্যাকটিক (`) দিয়ে লেখা হয়। এর মাধ্যমে খুব সহজে ভ্যারিয়েবল, এক্সপ্রেশন এবং একাধিক লাইনবিশিষ্ট স্ট্রিং লেখা যায় — কোনো ঝামেলা ছাড়াই।

```js
const name = "Mursalin";
const language = "JavaScript";
const message = `what do you do ${name} come to see  ${language}.`;
console.log(message);
```
- Any valid expression can be placed inside ${}