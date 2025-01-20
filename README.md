# Framer Motion

## Variants

- Reusable Animations: Variants make it easy to reuse the same animations across multiple components.
- String-Based States: You can call a state by its name (e.g., hidden, visible) as a string in initial, animate, or interaction props (whileHover, whileTap, etc.).
- Flexible Timing: Each state can include different properties, allowing you to create dynamic effects for various scenarios.

### Let's take a look at this boxVariants Object

#### Object defined:

```js
const boxVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { type: "spring", stiffness: 300 },
  },
};
```

1. boxVariants is an object:
   - This object contains the predefined "states" of the animation.
   - Each "state" (like hidden, visible, or hover) defines a set of animation properties.
2. Attach variants with the variants prop:
   - By passing boxVariants to the variants prop (i.e., variants={boxVariants}), you associate the component with those predefined states.
3. Define which state to use:

   - The initial prop determines the starting state (e.g., initial="hidden" starts with the hidden state).
   - The animate prop defines the target state (e.g., animate="visible" moves to the visible state).
   - Special props like whileHover let you specify animations for specific interactions (e.g., whileHover="hover" triggers the hover state).

#### div returned:

```js
<motion.div
  variants={boxVariants} // Attach variants
  initial="hidden" // Start in the "hidden" state
  animate="visible" // Animate to the "visible" state
  whileHover="hover" // Apply "hover" state on hover
  style={{
    backgroundColor: "lightblue",
    width: 150,
    height: 150,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
  }}
>
  Hover Me!
</motion.div>
```

### Does It Use Both transition states?

No, it only uses the transition of the target state (the state you're animating to). For example:

- From hidden to visible: The transition defined in the visible state is used.
- From visible to hidden: The transition defined in the hidden state is used.

## Gestures with Framer Motion

Framer Motion allows you to add interactivity through gestures like drag, hover, and tap. These are simple to implement and can make your components feel dynamic and engaging.

### 1. Drag:

- `drag`: Enables dragging for the element.
- `dragConstraints`: Limits dragging to a specific range (top, bottom, left, right).
- `dragElastic`: Controls how "stretchy" the drag boundaries feel.

### 2. Hover:

- `whileHover`: Applies the specified animation when the mouse hovers over the element.

### 3. Tap:

- `whileTap`: Applies the specified animation when the element is pressed/clicked.

### 3 dive with each Gesture:

```js
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    gap: "20px",
  }}
>
  {/* Drag Gesture */}
  <motion.div
    drag
    dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
    dragElastic={0.2}
    whileDrag={{ scale: 1.2, backgroundColor: "#ff6961" }}
    style={{
      backgroundColor: "lightblue",
      width: 150,
      height: 150,
      borderRadius: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "grab",
    }}
  >
    Drag Me!
  </motion.div>

  {/* Hover Gesture */}
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "#77dd77" }}
    style={{
      backgroundColor: "lightcoral",
      width: 150,
      height: 150,
      borderRadius: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      fontWeight: "bold",
    }}
  >
    Hover Me!
  </motion.div>

  {/* Tap Gesture */}
  <motion.div
    whileTap={{ scale: 0.9, rotate: -5, backgroundColor: "#fdfd96" }}
    style={{
      backgroundColor: "lightgreen",
      width: 150,
      height: 150,
      borderRadius: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    Tap Me!
  </motion.div>
</div>
```
