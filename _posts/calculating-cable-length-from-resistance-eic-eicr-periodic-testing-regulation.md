---
title: "How to Calculate Cable Length from Resistance Readings and Vice Versa in EIC, EICR, and Periodic Testing"
excerpt: "Learn how to calculate cable length from resistance readings and vice versa, a crucial process in EIC, EICR, and periodic testing to ensure safe and compliant electrical installations."
date: "2024-09-08T05:35:07.322Z"
author:
  name: OW London Electrician and Home Automation Engineers Team
  role: Electrician, Smart Home Engineers
  picture: "/assets/blog/authors/ow.png"
tags: [Electrical Safety, Wiring Regulations, BS 7671, Compliance, Cable Length Calculation, Resistance Measurement, Electrical Installation, Voltage Drop, Current-Carrying Capacity, EIC, EICR, Periodic Testing]
keywords: [Electrician London, Home Automation London, Electrician Near Me, Certified Electrical Compliance, Guide Note 3, Inspection and Testing, Cable Resistance, Cable Length, Voltage Drop, Electrical Calculations, EIC, EICR, Periodic Testing]
categories: [Electrical Calculations, Installation Verification, Troubleshooting]
coverImage: "/images/calculating-cable-length-from-resistance-eic-eicr-periodic-testing-regulation.webp"
miniImage: "/images/calculating-cable-length-from-resistance-eic-eicr-periodic-testing-regulation.webp"
ogImage:
  url: "/images/assets/blog/preview/read-blog-strip-ow-electrician-799-mini.webp"
lang: "en"
layout: "post"
social:
  twitter: "yourTwitterHandle"
  facebook: "yourFacebookPage"
faq: 
  - question: How do I calculate the length of a cable based on resistance readings?
    answer:  According to the On-Site Guide, you can calculate the cable length by dividing the measured resistance by the resistance per meter. For example, using a 2.5 mm² copper conductor with a measured resistance of 37.05 mΩ, and a resistance per meter of 7.41 mΩ/m, the length is approximately 5 meters.
  - question: What should I check after calculating the cable length?
    answer:  After calculating the cable length, verify that it does not cause excessive voltage drop and that the cable can handle the required current without overheating. The On-Site Guide, particularly pages 75 to 83, provides detailed information to help with this.
  - question: Can the calculated resistance indicate installation issues?
    answer:  Yes, if the measured resistance is higher or lower than expected, it could indicate problems such as partial breaks, poor connections, or short circuits. Verifying these calculations can help identify such issues.
  - question: Where can I find the resistance values for different cable sizes?
    answer:  The resistance values for different cable sizes can be found in the On-Site Guide, specifically on page 218. These values are crucial for accurate length and resistance calculations.
  - question: How do I ensure that a cable s calculated length is within allowable limits?
    answer:  To ensure that a cable s calculated length is within allowable limits, cross-reference your calculations with the On-Site Guide, which provides tables and formulas for voltage drop and current-carrying capacity. This ensures safe and compliant installations.

schema:
  type: "Article"
  articleSection: "Engineering"
  publication: "Electrical and Smart Home Engineering Insights"
---
### How to Calculate Cable Length from Resistance Readings and Vice Versa in EIC, EICR, and Periodic Testing

When working with electrical installations, it is often necessary to determine the length of a cable based on resistance readings or to estimate the expected resistance based on the known length of a cable. This process is crucial for verifying that cables have been installed correctly and ensuring that they are within acceptable limits for safe operation, especially during Electrical Installation Certificate (EIC), Electrical Installation Condition Report (EICR), and periodic testing.

This article will guide you through the steps to calculate the cable length from resistance readings and vice versa, using the resistance values provided in the table below.

**Resistance Table for Copper and Aluminium Conductors**

| Cross-sectional area (mm²) | Protective Conductor | Copper (mΩ/m) | Aluminium (mΩ/m) |
|-----------------------------|----------------------|---------------|------------------|
| 1                            | -                    | 18.10         | -                |
| 1                            | 1                    | 36.20         | -                |
| 1.5                          | -                    | 12.10         | -                |
| 1.5                          | 1                    | 30.20         | -                |
| 1.5                          | 1.5                  | 24.20         | -                |
| 2.5                          | -                    | 7.41          | -                |
| 2.5                          | 1                    | 25.51         | -                |
| 2.5                          | 1.5                  | 19.51         | -                |
| 2.5                          | 2.5                  | 14.82         | -                |
| 4                            | -                    | 4.61          | -                |
| 4                            | 1.5                  | 16.71         | -                |
| 4                            | 2.5                  | 12.02         | -                |
| 4                            | 4                    | 9.22          | -                |
| 6                            | -                    | 3.08          | -                |
| 6                            | 2.5                  | 10.49         | -                |
| 6                            | 6                    | 6.16          | -                |
| 10                           | -                    | 1.83          | -                |
| 10                           | 4                    | 6.44          | -                |
| 10                           | 6                    | 4.39          | -                |
| 10                           | 10                   | 3.66          | -                |
| 16                           | -                    | 1.15          | 1.91             |
| 16                           | 6                    | 4.23          | -                |
| 16                           | 10                   | 2.98          | 3.82             |
| 16                           | 16                   | 2.30          | -                |
| 25                           | -                    | 0.727         | 1.20             |
| 25                           | 10                   | 2.557         | -                |
| 25                           | 16                   | 1.877         | 2.40             |
| 25                           | 25                   | 1.454         | -                |
| 35                           | -                    | 0.524         | 0.87             |
| 35                           | 16                   | 1.674         | 2.78             |
| 35                           | 25                   | 1.251         | 2.07             |
| 35                           | 35                   | 1.048         | 1.74             |
| 50                           | -                    | 0.387         | 0.64             |
| 50                           | 25                   | 1.114         | 1.84             |
| 50                           | 35                   | 0.911         | 1.51             |
| 50                           | 50                   | 0.774         | 1.28             |

**Note**: The table can be found in the On-Site Guide on page 218.

### Step 1: Calculate the Cable Length from a Resistance Reading

To calculate the length of a cable when you have a measured resistance, use the following formula:

**Length (m) = Measured Resistance (mΩ) / Resistance per meter (mΩ/m)**

**Example Calculation**:  
Suppose you have a 2.5 mm² copper conductor with no protective conductor, and the resistance measured is 37.05 mΩ. Using the table, the resistance per meter for a 2.5 mm² copper conductor is 7.41 mΩ/m.

 $$ \text{Length (m)} = \frac{\text{37.05 mΩ}}{\text{7.41 mΩ/m}} ≈ 5 \text{ meters}  $$

This calculation indicates that the length of the cable is approximately 5 meters.

### Step 2: Calculate the Expected Resistance from a Known Cable Length

If you know the length of the cable and need to calculate the expected resistance, use this formula:

**Resistance (mΩ) = Length (m) × Resistance per meter (mΩ/m)**

**Example Calculation**:  
Let’s say you have a 10-meter length of 6 mm² copper conductor with no protective conductor. From the table, the resistance per meter is 3.08 mΩ/m.

 $$\text{Resistance (mΩ)} = 10 \text{ meters} × 3.08 \text{ mΩ/m} = 30.8 \text{ mΩ}  $$

So, the expected resistance for this cable would be 30.8 mΩ.

### Step 3: Applying These Calculations in Real-World Scenarios

When working on-site, these calculations help in various scenarios:

- **Verifying Installation**: After installing a cable, measuring its resistance and comparing it with the expected value (based on its length) can verify that the cable is correctly installed and free of faults.
- **Troubleshooting**: If the resistance reading is higher than expected, it could indicate a problem such as a partial break or poor connection. Conversely, a lower-than-expected resistance might suggest a short circuit or incorrect measurement.
- **Cable Sizing**: Before installation, you can determine whether the cable length will meet the design requirements by calculating the resistance and ensuring it’s within the allowable limits for the circuit.

### Step 4: Verify Cable Lengths Using the On-Site Guide

After calculating the length or resistance of a cable, it’s crucial to verify that this length is permissible for the specific cable size and application. For this, you should refer to the On-Site Guide, specifically pages 75 to 83.

**What to Check**:

- **Voltage Drop**: Ensure that the calculated length does not cause excessive voltage drop, which could lead to inefficient operation or safety hazards.
- **Current-Carrying Capacity**: Check if the cable can handle the required current over the calculated length without overheating.

The On-Site Guide provides detailed tables and formulas to help you determine if your calculated cable length is within the allowable limits for the specific application.

By following these steps and cross-referencing the On-Site Guide, you can ensure that your electrical installations are safe, compliant, and efficient.

![Author](/assets/blog/ow-read-blog-sticky-man.webp)

### Frequently Asked Questions

#### Q: How do I calculate the length of a cable based on resistance readings?

**A**: According to the On-Site Guide, you can calculate the cable length by dividing the measured resistance by the resistance per meter. For example, using a 2.5 mm² copper conductor with a measured resistance of 37.05 mΩ, and a resistance per meter of 7.41 mΩ/m, the length is approximately 5 meters.

#### Q: What should I check after calculating the cable length?

**A**: After calculating the cable length, verify that it does not cause excessive voltage drop and that the cable can handle the required current without overheating. The On-Site Guide, particularly pages 75 to 83, provides detailed information to help with this.

#### Q: Can the calculated resistance indicate installation issues?

**A**: Yes, if the measured resistance is higher or lower than expected, it could indicate problems such as partial breaks, poor connections, or short circuits. Verifying these calculations can help identify such issues.

#### Q: Where can I find the resistance values for different cable sizes?

**A**: The resistance values for different cable sizes can be found in the On-Site Guide, specifically on page 218. These values are crucial for accurate length and resistance calculations.

#### Q: How do I ensure that a cable s calculated length is within allowable limits?

**A**: To ensure that a cable s calculated length is within allowable limits, cross-reference your calculations with the On-Site Guide, which provides tables and formulas for voltage drop and current-carrying capacity. This ensures safe and compliant installations.
