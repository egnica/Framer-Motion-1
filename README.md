# Framer Motion

## Let's take a look at the boxVariants Object

```js
Object defined:

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

div returned:
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
