# Prairie Forge – Client UI Preview Customization Guide

This template creates professional client preview assets for your automation projects. All customization happens in **one file**: `/config/project-config.ts`

---

## 🚀 Quick Start (3 Steps)

### 1. Open the Config File
Navigate to `/config/project-config.ts`

### 2. Update Your Project Details
```typescript
export const projectConfig: ProjectConfig = {
  // Your client's name
  clientName: "Acme Corp",
  
  // Your project screenshots
  screenshots: {
    left: "path/to/your/screenshot1.png",
    right: "path/to/your/screenshot2.png"
  },
  
  // Customize the callout labels
  labels: {
    label1: {
      text: "Your Feature Here",
      position: { top: '32px', left: '60px' }
    },
    // ... etc
  }
}
```

### 3. Preview
Click "Start Animation" to see your customized preview!

---

## 📝 Detailed Customization Options

### Client Name
```typescript
clientName: "Your Client Name"
```
This appears in the header as: "[Client Name] Automation – UI Preview"

---

### Screenshots

Replace with your actual project screenshots:

```typescript
screenshots: {
  left: "path/to/screenshot1.png",   // Primary screenshot
  right: "path/to/screenshot2.png"   // Secondary screenshot
}
```

**Options for screenshot paths:**
- **Local files**: `"/assets/my-screenshot.png"`
- **External URLs**: `"https://example.com/image.png"`
- **Unsplash**: `"https://images.unsplash.com/photo-..."`

---

### Callout Labels

Customize the text and position of each annotation:

```typescript
labels: {
  label1: {
    text: "Your Feature Description",
    position: { top: '32px', left: '60px' }
  },
  label2: {
    text: "Another Feature",
    position: { top: '180px', right: '80px' }
  },
  label3: {
    text: "Third Feature",
    position: { bottom: '50px', left: '100px' }
  }
}
```

**Position Options:**
- Use `top` + `left` for top-left positioning
- Use `top` + `right` for top-right positioning
- Use `bottom` + `left` for bottom-left positioning
- Use `bottom` + `right` for bottom-right positioning

**Examples:**
```typescript
{ top: '40px', left: '70px' }      // Top-left corner
{ top: '200px', right: '100px' }   // Top-right area
{ bottom: '60px', left: '120px' }  // Bottom-left area
```

---

### Animation Timing

Adjust how long each frame displays (in milliseconds):

```typescript
animation: {
  frame1Duration: 3000,  // 3 seconds
  frame2Duration: 3500,  // 3.5 seconds
  frame3Duration: 3500   // 3.5 seconds
}
```

**Total animation time** = frame1 + frame2 + frame3 = 10 seconds (default)

---

## 💼 Example Configurations

### E-commerce Project
```typescript
export const ecommerceConfig: ProjectConfig = {
  clientName: "ShopFlow",
  screenshots: {
    left: "/assets/ecommerce-dashboard.png",
    right: "/assets/order-management.png"
  },
  labels: {
    label1: {
      text: "Real-time Inventory Sync",
      position: { top: '40px', left: '70px' }
    },
    label2: {
      text: "Automated Order Processing",
      position: { top: '200px', right: '100px' }
    },
    label3: {
      text: "Customer Dashboard",
      position: { bottom: '60px', left: '120px' }
    }
  },
  animation: {
    frame1Duration: 3000,
    frame2Duration: 3500,
    frame3Duration: 3500
  }
};
```

### CRM Automation
```typescript
export const crmConfig: ProjectConfig = {
  clientName: "TechCorp",
  screenshots: {
    left: "/assets/crm-contacts.png",
    right: "/assets/crm-pipeline.png"
  },
  labels: {
    label1: {
      text: "Contact Auto-enrichment",
      position: { top: '50px', left: '80px' }
    },
    label2: {
      text: "Pipeline Automation",
      position: { top: '160px', right: '90px' }
    },
    label3: {
      text: "Smart Reporting",
      position: { bottom: '70px', left: '140px' }
    }
  },
  animation: {
    frame1Duration: 3000,
    frame2Duration: 3500,
    frame3Duration: 3500
  }
};
```

---

## 🔄 Using Different Configs

To switch between different project configs:

**In `/App.tsx`, line 13:**
```typescript
// Default config
const config = projectConfig;

// Or use a different config
const config = ecommerceProjectConfig;
const config = crmProjectConfig;
```

---

## 📋 What's Next Section

The bottom section displays a professional 3-step checklist showing project progress:
- ✅ Meet to review your requirements together (Complete)
- ✅ Build and refine your customized workflow solution (Complete)
- ➜ Walk through the final product and begin using it (Next Step)

This section is automatically included and doesn't need customization.

---

## 📤 Exporting

Once your preview looks perfect:

1. **Screenshot the frame** (use browser screenshot or snipping tool)
2. **Record the animation** (use screen recording software)
3. Save as:
   - Static: `PF-UI-Preview-[ClientName].png`
   - Video: `PF-UI-Preview-[ClientName].mp4`

---

## 🎨 Brand Colors (Fixed)

These are part of the Prairie Forge brand and shouldn't be changed:
- Primary Text: `#F5F5F7`
- Secondary Text: `#C9C9D6`
- Accent Purple: `#3533CD`
- Highlight Purple: `#9593FF`
- Complete Green: `#2ECC71`
- Background: Black-to-blue gradient
- Next Steps Block: `#1A1A1E`

---

## 📏 Frame Specifications

- **Size**: 1200 × 820 px
- **Header**: 120px height
- **UI Container**: 520px height
- **Next Steps Section**: 220px height
- **Copyright Footer**: 40px height
- **Border Radius**: 16px
- **Padding**: 24-32px throughout

---

## ❓ Need Help?

Common issues:

**Screenshots not showing?**
- Check file paths are correct
- Use absolute paths starting with `/`
- Ensure images are in the project

**Labels overlapping?**
- Adjust position values in config
- Use different combinations of top/bottom and left/right

**Animation too fast/slow?**
- Adjust `animation` duration values in config
- Values are in milliseconds (1000 = 1 second)

---

**Prairie Forge — Practical Automation for Modern Professionals**