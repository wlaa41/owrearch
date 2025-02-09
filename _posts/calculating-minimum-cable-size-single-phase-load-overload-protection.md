---
title: "Calculating Minimum Cable Size for a Single-Phase Load with Overload Protection"
excerpt: "A single-phase electrical installation requires a cable to supply a load of 16 A, protected by a 20 A semi-enclosed fuse. The installation uses multi-core 70°C thermoplastic insulated copper cables following Reference Method B. The installation is subject to a grouping factor of 0.8 due to the proximity of other cables. Determining the minimum acceptable cable size for this setup in accordance with BS 7671 regulations."
date: "2024-07-04T05:35:07.322Z"
author:
  name: OW London Electrician and Home Automation Engineers Team
  role: Electrician, Smart Home Engineers
  picture: "/assets/blog/authors/ow.png"
tags: [Electrical Safety, Wiring Regulations, BS 7671, Compliance, Cable Sizing, Overload Protection, Reference Method B, BS 3036, Appendix 4]
keywords:  [Electrician London, Home Automation London, Electrician Near Me, Certified Electrical Compliance, Note 3, Cable Sizing, Overload Protection, Thermoplastic Insulated Copper Cables, Rating Factor, Grouping Factor]
categories: [Electrical Engineering, Compliance]
coverImage: "/images/calculating-minimum-cable-size-single-phase-load-overload-protection.webp"
miniImage: "/images/calculating-minimum-cable-size-single-phase-load-overload-protection.webp"
ogImage:
  url: "/images/assets/blog/preview/read-blog-strip-ow-electrician-799-mini.webp"
lang: "en"
layout: "post"
social:
  twitter: "yourTwitterHandle"
  facebook: "yourFacebookPage"
faq:
  - question: "What is the significance of the rating factor for grouping in cable sizing?"
    answer: "The rating factor for grouping, also known as the derating factor, is used to adjust the current-carrying capacity of cables when they are installed in groups. This ensures that the cables do not overheat and maintains safety and efficiency. According to BS 7671, the rating factor for grouping can significantly affect the minimum acceptable cable size."
  - question: "How does Reference Method B affect cable selection?"
    answer: "Reference Method B, or Method 4, pertains to the installation conditions of cables, specifically where cables are installed in conduit or trunking. This method impacts the current-carrying capacity of the cables and thus influences the minimum cable size required for safety and compliance."
schema:
  type: "Article"
  articleSection: "Engineering"
  publication: "Electrical and Smart Home Engineering Insights"
---

## Calculating Minimum Cable Size for a Single-Phase Load with Overload Protection

![Author](/assets/blog/ow-read-blog-sticky-man.webp)

### Question

A single-phase electrical installation requires a cable to supply a load of 16 A, protected by a 20 A semi-enclosed fuse. The installation uses multi-core 70°C thermoplastic insulated copper cables following Reference Method B. The installation is subject to a grouping factor of 0.8 due to the proximity of other cables. What is the minimum acceptable cable size for this setup?

### Understanding the Calculation

When sizing cables for electrical installations, compliance with BS 7671 is essential to ensure safety and reliability. In this case, we have a single-phase load of 16 A supplied via a 20 A semi-enclosed fuse to BS 3036 using multi-core 70°C thermoplastic insulated copper cables installed to method 4 (Reference Method B). The rating factor for grouping is 0.8.

### Step-by-Step Calculation

1. **Determine the design current (Ib):**
   - Ib = 16 A

2. **Calculate the rating of the protective device (In):**
   - In = 20 A

3. **Determine the rating factor for the protective device (fuse rating factor, Cf):**
   - Cf for BS 3036 fuses is 0.725 (as per Appendix 4, page 424)

4. **Calculate the corrected current (I2):**
   - I2 = In / Cf = 20 A / 0.725 ≈ 27.59 A

5. **Apply the rating factor for grouping (Cg):**
   - Cg = 0.8

6. **Determine the minimum required current-carrying capacity (It):**
   - It = I2 / Cg = 27.59 A / 0.8 ≈ 34.49 A

### Selection of Cable Size

Referring to Table 4D1A in the BS 7671 regulations for multi-core 70°C thermoplastic insulated copper cables:

- For Reference Method B, a 6 mm² cable has a current-carrying capacity of 34 A (considering ambient temperature of 30°C and not grouped).
- Since 34 A (capacity of 6 mm² cable) is slightly below 34.49 A (required It), we need to choose the next size up.
- Therefore, a 10 mm² cable should be selected to ensure compliance and safety, which has a higher current-carrying capacity.

### Conclusion

To safely supply a single-phase load of 16 A using a 20 A semi-enclosed fuse to BS 3036 with multi-core 70°C thermoplastic insulated copper cables installed to method 4 (Reference Method B) and a rating factor for grouping of 0.8, the minimum acceptable cable size would be 10 mm².

### Frequently Asked Questions

#### Q: What is the significance of the rating factor for grouping in cable sizing?

**A**: The rating factor for grouping, also known as the derating factor, is used to adjust the current-carrying capacity of cables when they are installed in groups. This ensures that the cables do not overheat and maintains safety and efficiency. According to BS 7671, the rating factor for grouping can significantly affect the minimum acceptable cable size.

#### Q: How does Reference Method B affect cable selection?

**A**: Reference Method B, or Method 4, pertains to the installation conditions of cables, specifically where cables are installed in conduit or trunking. This method impacts the current-carrying capacity of the cables and thus influences the minimum cable size required for safety and compliance.
