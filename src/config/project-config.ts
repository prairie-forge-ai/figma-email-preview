/**
 * PRAIRIE FORGE – PROJECT CONFIGURATION
 * 
 * Update this file for each new client project.
 * All three frames will automatically use these settings.
 */

export interface ProjectConfig {
  // Client information
  clientName: string;
  
  // UI Screenshots
  // Replace these URLs with your actual project screenshots
  // You can use local imports or external URLs
  screenshots: {
    left: string;  // Main/primary screenshot
    right: string; // Secondary screenshot
  };
  
  // Callout labels - customize text and positions
  labels: {
    label1: {
      text: string;
      position: { top?: string; bottom?: string; left?: string; right?: string };
    };
    label2: {
      text: string;
      position: { top?: string; bottom?: string; left?: string; right?: string };
    };
    label3: {
      text: string;
      position: { top?: string; bottom?: string; left?: string; right?: string };
    };
  };
  
  // Animation settings (optional customization)
  animation: {
    frame1Duration: number; // milliseconds to show frame 1
    frame2Duration: number; // milliseconds to show frame 2
    frame3Duration: number; // milliseconds to show frame 3
  };
}

// ============================================================
// DEFAULT CONFIGURATION - UPDATE FOR YOUR PROJECT
// ============================================================

export const projectConfig: ProjectConfig = {
  // 1. CLIENT NAME
  clientName: "Acme Corp",
  
  // 2. UI SCREENSHOTS
  // Replace with your actual project screenshots
  screenshots: {
    left: "https://images.unsplash.com/photo-1634804658555-248d9e9a212f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    right: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  
  // 3. CALLOUT LABELS
  // Customize the text and position for each label
  labels: {
    label1: {
      text: "Automated Data Processing",
      position: { top: '32px', left: '60px' }
    },
    label2: {
      text: "Streamlined Workflow",
      position: { top: '180px', right: '80px' }
    },
    label3: {
      text: "New Navigation Structure",
      position: { bottom: '50px', left: '100px' }
    }
  },
  
  // 5. ANIMATION TIMING
  animation: {
    frame1Duration: 3000,  // 3 seconds
    frame2Duration: 3500,  // 3.5 seconds
    frame3Duration: 3500   // 3.5 seconds
  }
};

// ============================================================
// EXAMPLE CONFIGURATIONS FOR DIFFERENT PROJECTS
// ============================================================

// Example: E-commerce Dashboard Project
export const ecommerceProjectConfig: ProjectConfig = {
  clientName: "ShopFlow",
  screenshots: {
    left: "path/to/ecommerce-dashboard.png",
    right: "path/to/ecommerce-analytics.png"
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

// Example: CRM Automation Project
export const crmProjectConfig: ProjectConfig = {
  clientName: "TechCorp",
  screenshots: {
    left: "path/to/crm-contacts.png",
    right: "path/to/crm-pipeline.png"
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