// In your /src/styles/utils.js

export function darken(amount, color) {
    let usePound = false;
  
    if (color.startsWith("#")) {
     color = color.slice(1);
     usePound = true;
    }
  
    const num = parseInt(color, 16);
  
    let r = Math.max(0, Math.min(255, (num >> 16) + amount));
    let b = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
    let g = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
  
    const toHex = (c) => {
     const hex = c.toString(16);
     return hex.length === 1 ? "0" + hex : hex;
    };
  
    return (usePound ? "#" : "") + toHex(r) + toHex(g) + toHex(b);
   }
  
   export function lighten(amount, color) {
    let usePound = false;
  
    if (color.startsWith("#")) {
     color = color.slice(1);
     usePound = true;
    }
  
    const num = parseInt(color, 16);
  
    let r = Math.max(0, Math.min(255, (num >> 16) - amount)); // Subtract to lighten
    let b = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) - amount)); // Subtract to lighten
    let g = Math.max(0, Math.min(255, (num & 0x0000FF) - amount)); // Subtract to lighten
  
    const toHex = (c) => {
     const hex = c.toString(16);
     return hex.length === 1 ? "0" + hex : hex;
    };
  
    return (usePound ? "#" : "") + toHex(r) + toHex(g) + toHex(b);
   }