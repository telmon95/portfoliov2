# Adding Your Profile Photo

## Quick Steps:

1. **Save your photo** as `profile-photo.jpg` in the `/public` folder
   - Location: `/Users/telmonmaluleka/portfolio/public/profile-photo.jpg`
   - Recommended size: 500x500px or larger (square image works best)
   - Formats supported: JPG, PNG, WebP

2. **The photo will automatically appear** in the Hero section

3. **If the photo doesn't load**, it will fallback to showing "TM" initials

## Alternative: Using a different filename

If you want to use a different filename, update `src/components/Hero.js`:

```jsx
<img 
  src="/your-photo-name.jpg" 
  alt="Telmon Maluleka" 
  className="avatar-image"
/>
```

## Image Optimization Tips:

- Use a square image (1:1 aspect ratio)
- Recommended size: 500x500px to 800x800px
- File size: Keep under 200KB for fast loading
- Format: JPG for photos, PNG for graphics

---

**Your photo will be displayed in a circular frame with a nice glow effect!**

