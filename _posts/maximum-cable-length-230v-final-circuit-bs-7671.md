---
title: "Understanding Maximum Cable Lengths for 230V Final Circuits"
excerpt: "Regulation 7.1(ii) of BS 7671 outlines the maximum allowable cable lengths for 230V final circuits to ensure compliance with voltage drop limits and safety standards. This regulation helps electricians design circuits that are both safe and efficient, taking into account factors like cable size, protective device rating, and installation methods."
date: "2024-09-10T05:35:07.322Z"
author:
  name: OW London Electrician and Home Automation Engineers Team
  role: Electrician, Smart Home Engineers
  picture: "/assets/blog/authors/ow.png"
tags: [Electrical Safety, Wiring Regulations, BS 7671, Compliance, Cable Length, Voltage Drop, Final Circuits]
keywords: [Electrician London, Home Automation London, Electrician Near Me, Certified Electrical Compliance, BS 7671, Maximum Cable Length, Voltage Drop, Final Circuits, RCD, Protective Device]
categories: [Electrical Design, Circuit Safety]
coverImage: "/images/maximum-cable-length-230v-final-circuit-bs-7671.webp"
miniImage: "/images/maximum-cable-length-230v-final-circuit-bs-7671.webp"
ogImage:
  url: "/images/assets/blog/preview/read-blog-strip-ow-electrician-799-mini.webp"
lang: "en"
layout: "post"
social:
  twitter: "yourTwitterHandle"
  facebook: "yourFacebookPage"
faq:
  - question: "How does cable size affect the maximum length of a circuit?"
    answer: "According to Regulation 7.1(ii) of BS 7671, the maximum cable length is influenced by the cable size, as larger cables can carry more current with less voltage drop. This means a larger cable size can allow for a longer circuit while staying within safe voltage drop limits."
  - question: "What installation methods are considered in determining maximum cable lengths?"
    answer: "Regulation 7.1(ii) includes several installation methods such as clipped direct (Method 100) or buried in insulation, which affect the maximum cable length due to differences in heat dissipation and current-carrying capacity. The allowed methods are detailed in Tables 7.1(iii) and 7.1(iv)."
  - question: "Why is RCD protection important when determining cable lengths?"
    answer: "RCD protection is crucial because it affects the maximum cable length permissible under BS 7671. With RCD protection, circuits can be longer as the device provides additional safety against earth faults, thereby allowing for higher earth fault loop impedance (Zs) limits."
  - question: "What limitations might apply to certain circuit configurations?"
    answer: "Table 7.1(ii) includes several notes that outline limitations, such as restrictions due to earth fault loop impedance (Zs), line-to-neutral loop impedance (sc), or the reduced cross-sectional area (CSA) of the protective conductor (ad). These factors can prohibit the use of certain cable lengths or configurations."
  - question: "How do voltage drop considerations influence circuit design?"
    answer: "Voltage drop is the primary constraint on cable length as per Regulation 7.1(ii) in BS 7671. Typically, a 5% voltage drop is allowed for ring and radial circuits, while a 3% drop is the limit for lighting circuits. Ensuring that the circuit remains within these limits is critical for maintaining safe and efficient operation."

schema:
  type: "Article"
  articleSection: "Engineering"
  publication: "Electrical and Smart Home Engineering Insights"
---

### Understanding Maximum Cable Lengths for 230V Final Circuits

Understanding the maximum cable length for a 230 V final circuit is crucial to ensure that the voltage drop remains within acceptable limits and that the circuit operates safely. **Regulation 7.1(ii) of BS 7671 states:**

> "The maximum length of cables depends on the protective device rating, cable size, and installation method, while also considering factors like the presence of RCDs and the type of earthing system (TN-S or TN-C-S)."

This regulation helps electricians design circuits that are both safe and efficient, taking into account factors like cable size, protective device rating, and installation methods.

### **Example: Determining Maximum Cable Length for a 32A Ring Final Circuit**

**Scenario**: Suppose you are installing a ring final circuit in a residential kitchen, protected by a 32A Type B circuit breaker (CB/RCBO). The cable size chosen is 2.5mm² for phase conductors and 1.5mm² for the protective conductor. The installation method is Method 100, which typically involves clipped direct to a surface.

**Calculation**:
- **Maximum Length**: According to the table, for this configuration, the maximum cable length is 106 meters if the earth fault loop impedance (Z<sub>e</sub>) is 0.8 Ω (TN-S) or 0.35 Ω (TN-C-S).
- **RCD Consideration**: If the circuit is protected by a 30 mA RCD, the full 106 meters can be utilized. If no RCD is present, and Z<sub>e</sub> is closer to the upper limit, you would need to re-evaluate based on the specific Z<sub>s</sub> values, which might restrict the maximum allowable length further.

### **Example: Calculating Cable Length for a Lighting Circuit**

**Scenario**: You are wiring a lighting circuit in a hallway using a 6A Type C circuit breaker. The selected cable is 1.0mm², installed using Method 100 (clipped direct).

**Calculation**:
- **Maximum Length**: The maximum cable length is 68 meters when considering a standard installation with an RCD. However, due to the higher inrush current of Type C breakers, the length may be limited by the earth fault loop impedance (Z<sub>s</sub>), especially if no RCD is present.
- **Practical Implication**: If Z<sub>e</sub> is high, you may need to reduce the cable length to meet safety requirements or consider upgrading the cable size to maintain the required length.

### Key Considerations

- **Voltage Drop**: The maximum cable length is primarily limited by voltage drop (typically 5% for ring and radial circuits, 3% for lighting circuits).
- **Z<sub>s</sub> Limitations**: Ensure that the earth fault loop impedance does not exceed the limits specified for the protective device, particularly in circuits without RCD protection.
- **Cable Size**: Increasing the cable size can extend the permissible length, but also consider the practical aspects like installation difficulty and cost.
- **Installation Methods**: Different installation methods (e.g., buried in insulation vs. clipped direct) can significantly affect the allowable cable length due to their impact on cable current-carrying capacity.

By following these guidelines and using Table 7.1(ii) correctly, you can design safe and effective electrical circuits that comply with BS 7671 standards.


**Table 7.1(ii) Maximum cable length for a 230 V final circuit using 70 °C thermoplastic (PVC) insulated and sheathed flat cable**


| Rating (A) For-Different-Types-Of-Circuit(5 % 3 % voltage drop)| Protective device       | Cable size (mm²) | Allowed installation methods (NOTE 2) | Maximum length (m) (NOTE 1) | Maximum length (m) (NOTE 1)| Maximum length (m) (NOTE 1)| Maximum length (m) (NOTE 1)|
|------------|-------------------------|------------------|-----------------------------------------|----------|--------|-----------|--------|

|            |                         |                  |                                         | RCD 30 mA TN-S | No RCD TN-S | RCD 30 mA TN-C-S | No RCD TN-C-S |
|------------|-------------------------|------------------|-----------------------------------------|----------|--------|-----------|--------|
| **Ring final circuits (5 % voltage drop, load distributed)**                                                                               |
| 30         | BS 3036                 | 2.5/1.5          | 100, 102, A, C                          | 106      | 41zs   | 106       | 106    |
| 30         | BS 3036                 | 4.0/1.5          | 100, 102, A, 101, 103, C                | 171      | 48     | 171       | 138zs  |
| 32         | cb/RCBO Type B          | 2.5/1.5          | 100, 102, A, C                          | 106      | 96zs   | 106       | 106    |
| 32         | cb/RCBO Type C          | 2.5/1.5          | 100, 102, A, C                          | 106      | NPzs   | 106       | 56zs   |
| 32         | cb/RCBO Type D          | 2.5/1.5          | 100, 102, A, C                          | 106      | NPzs   | 106       | NPzs   |
| 32         | BS 88-2 (BS EN 60269-2) | 2.5/1.5          | 100, 102, A, C                          | 106vd    | 32zs   | 106vd     | 106vd  |
| 32         | BS 88-2 (BS EN 60269-2) | 4.0/1.5          | 100, 101, 102, 103, A, C                | 171      | 38zs   | 171vd     | 127zs  |
| 32         | BS 88-3                 | 2.5/1.5          | 100, 101, A, 102, 103, A, C             | 106vd    | 19ad   | 106       | 95zs   |
| 32         | BS 88-3                 | 4.0/1.5          | 100, 102, A, 101, 103, A, C             | 171      | 22zs   | 171       | 112zs  |
| 32         | cb/RCBO Type B          | 4.0/1.5          | 100, 102, A, 101, 103, A, C             | 171vd    | 114zs  | 171vd     | 171vd  |
| 32         | cb/RCBO Type C          | 4.0/1.5          | 100, 102, A, 101, 103, A, C             | 171vd    | NPzs   | 171vd     | 66zs   |
| 32         | cb/RCBO Type D          | 4.0/1.5          | 100, 102, A, 101, 103, A, C             | 171vd    | NPzs   | 171vd     | NPzs   |
| **Lighting circuits (3 % voltage drop, load distributed)**                                                                                 |
| 5          | BS 3036                 | 1.0/1.0          | 100, 101, 102, 103, A, C                | 68       | 68     | 68        | 68     |
| 5          | BS 3036                 | 1.5/1.0          | 100, 101, 102, 103, A, C                | 106      | 106    | 106       | 106    |
| 5          | BS 88-3                 | 1.0/1.0          | 100, 101, 102, 103, A, C                | 68       | 68     | 68        | 68     |
| 5          | BS 88-3                 | 1.5/1.0          | 100, 101, 102, 103, A, C                | 106      | 106    | 106       | 106    |
| 6          | cb/RCBO Type B          | 1.0/1.0          | 100, 101, 102, 103, A, C                | 68       | 68     | 68        | 65zs   |
| 6          | cb/RCBO Type C          | 1.0/1.0          | 100, 101, 102, 103, A, C                | 68       | 68     | 68        | 23zs   |
| 6          | cb/RCBO Type D          | 1.0/1.0          | 100, 101, 102, 103, A, C                | 68       | 68     | 68        | 23zs   |
| 6          | BS 88-2 (BS EN 60269-2) | 1.0/1.0          | 100, 101, 102, 103, A, C                | 68       | 68     | 68        | 68     |
| 6          | cb/RCBO Type B          | 1.5/1.0          | 100, 101, 102, 103, A, C                | 106      | 106    | 106       | 78zs   |
| 6          | cb/RCBO Type C          | 1.5/1.0          | 100, 101, 102, 103, A, C                | 106      | 106    | 106       | 28zs   |
| 6          | cb/RCBO Type D          | 1.5/1.0          | 100, 101, 102, 103, A, C                | 106      | 106    | 106       | 28zs   |
| 6          | BS 88-2 (BS EN 60269-2) | 1.5/1.0          | 100, 101, 102, 103, A, C                | 106      | 106    | 106       | 106    |
| 10         | cb/RCBO Type B          | 1.0/1.0          | 100, 101, 102, A, C                     | 42vd     | 42vd   | 42vd      | 42vd   |
| 10         | cb/RCBO Type C          | 1.0/1.0          | 100, 101, 102, A, C                     | 42vd     | 32zs   | 42vd      | 32zs   |
| 10         | cb/RCBO Type D          | 1.0/1.0          | 100, 101, 102, A, C                     | 42vd     | 23zs   | 42vd      | 23zs   |
| 10         | cb/RCBO Type B          | 1.5/1.0          | 100, 101, 102, A, C                     | 65vd     | 65vd   | 65vd      | 65vd   |
| 10         | cb/RCBO Type C          | 1.5/1.0          | 100, 101, 102, A, C                     | 65vd     | 38zs   | 65vd      | 51zs   |
| 10         | cb/RCBO Type D          | 1.5/1.0          | 100, 101, 102, A, C                     | 65vd     | 28zs   | 65vd      | 41zs   |
| 10         | BS 88-2 (BS EN 60269-2) | 1.0/1.0          | 100, 101, 102, A, C                     | 42       | 42     | 42        | 42     |
| 10         | BS 88-2 (BS EN 60269-2) | 1.5/1.0          | 100, 101, 102, A, C                     | 65       | 65     | 65        | 65     |
| 16         | cb/RCBO Type B          | 1.5/1.0          | 100, 102, C                             | 34       | 34     | 34        | 34     |
| 16         | cb/RCBO Type C          | 1.5/1.0          | 100, 102, C                             | 34       | 15sc   | 34        | 28zs   |
| 16         | cb/RCBO Type D          | 1.5/1.0          | 100, 102, C                             | 34       | NPad   | 34        | 9zs    |
| 16         | cb/RCBO Type B          | 2.5/1.5          | 100, 101, 102, A, C                     | 49       | 49     | 49        | 49     |
| 16         | cb/RCBO Type C          | 2.5/1.5          | 100, 101, 102, A, C                     | 49       | 24zs   | 49        | 44zs   |
| 16         | cb/RCBO Type D          | 2.5/1.5          | 100, 101, 102, A, C                     | 49       | NPad   | 49        | 14zs   |
| 16         | BS 88-2 (BS EN 60269-2) | 1.5/1.0          | 100, 102, C                             | 20       | 20     | 20        | 20     |
| 16         | BS 88-2 (BS EN 60269-2) | 2.5/1.5          | 100, 101, 102, A, C                     | 49       | 49     | 49        | 49     |
| 16         | BS 88-3                 | 1.5/1.0          | 100, 102, C                             | 34       | 34     | 34        | 34     |
| 16         | BS 88-3                 | 2.5/1.5          | 100, 101, 102, A, C                     | 34       | 34     | 34        | 34     |
| **Radial final circuits (5 % voltage drop, terminal load)**                                                                   |         
| 5          | BS 3036                 | 1.0/1.0          | 100, 101, 102, 103, A, C                | 56       | 56     | 56        | 56     |
| 5          | BS 88-3                 | 1.0/1.0          | 100, 101, 102, 103, A, C                | 56       | 56     | 56        | 56     |
| 5          | BS 3036                 | 1.5/1.0          | 100, 101, 102, 103, A, C                | 88       | 88     | 88        | 88     |
| 5          | BS 88-3                 | 1.5/1.0          | 100, 101, 102, 103, A, C                | 88       | 88     | 88        | 88     |
| 6          | cb/RCBO Type B          | 1.0/1.0          | 100, 101, 102, 103, A, C                | 56       | 56     | 56        | 56     |
| 6          | cb/RCBO Type C          | 1.0/1.0          | 100, 101, 102, 103, A, C                | 56       | 56     | 56        | 23zs   |
| 6          | cb/RCBO Type D          | 1.0/1.0          | 100, 101, 102, 103, A, C                | 56       | 56     | 56        | 33zs   |
| 6          | BS 88-2 (BS EN 60269-2) | 1.0/1.0          | 100, 101, 102, 103, A, C                | 56       | 56     | 56        | 56     |
| 6          | BS 88-2 (BS EN 60269-2) | 1.5/1.0          | 100, 101, 102, 103, A, C                | 88       | 88     | 88        | 88     |
| 6          | cb/RCBO Type B          | 1.5/1.0          | 100, 101, 102, 103, A, C                | 88       | 88     | 88        | 78zs   |
| 6          | cb/RCBO Type C          | 1.5/1.0          | 100, 101, 102, 103, A, C                | 88       | 88     | 88        | 28zs   |
| 6          | cb/RCBO Type D          | 1.5/1.0          | 100, 101, 102, 103, A, C                | 88       | 88     | 88        | 40zs   |
| 10         | cb/RCBO Type B          | 1.0/1.0          | 100, 101, 102, A, C                     | 35       | 35     | 35        | 36     |
| 10         | cb/RCBO Type C          | 1.0/1.0          | 100, 101, 102, A, C                     | 35       | 31zs   | 35        | 36     |
| 10         | cb/RCBO Type D          | 1.0/1.0          | 100, 101, 102, A, C                     | 35       | 6zs    | 35        | 17zs   |
| 10         | cb/RCBO Type B          | 1.5/1.0          | 100, 101, 102, 103, A, C                | 52       | 52     | 52        | 52     |
| 10         | cb/RCBO Type C          | 1.5/1.0          | 100, 101, 102, 103, A, C                | 52       | 38zs   | 52        | 50zs   |
| 10         | cb/RCBO Type D          | 1.5/1.0          | 100, 101, 102, 103, A, C                | 52       | 8zs    | 52        | 20zs   |
| 10         | BS 88-2 (BS EN 60269-2) | 1.0/1.0          | 100, 101, 102, 103, A, C                | 35       | 35     | 35        | 35     |
| 10         | BS 88-2 (BS EN 60269-2) | 1.5/1.0          | 100, 101, 102, 103, A, C                | 52       | 52     | 52        | 52     |
| 15         | BS 3036                 | 1.0/1.0          | NP                                     | NP       | NP     | NP        | NP     |
| 15         | BS 3036                 | 1.5/1.0          | NP                                     | NP       | NP     | NP        | NP     |
| 15         | BS 3036                 | 2.5/1.5          | 100, 102, C                             | 47       | 47     | 47        | 47     |
| 15         | BS 3036                 | 4.0/1.5          | 100, 101, 102, A, C                     | 76       | 76     | 76        | 76     |
| 16         | cb/RCBO Type B          | 1.0/1.0          | C                                      | 18       | 18     | 18        | 18     |
| 16         | cb/RCBO Type C          | 1.0/1.0          | C                                      | 18       | 13zs   | 18        | 13zs   |
| 16         | cb/RCBO Type D          | 1.0/1.0          | C                                      | 18       | 7      | 18        | NPad   |
| 16         | BS 88-2 (BS EN 60269-2) | 1.5/1.0          | 100, 102, C                             | 27       | 27     | 27        | 27     |
| 16         | BS 88-2 (BS EN 60269-2) | 2.5/1.5          | 100, 101, 102, A, C                     | 45       | 45     | 45        | 45     |
| 16         | BS 88-2 (BS EN 60269-2) | 4.0/1.5          | 100, 101, 102, 103, A, C                | 74       | 74     | 74        | 74     |
| 16         | BS 88-3                 | 1.5/1.0          | 100, 102, C                             | 27       | 27     | 27        | 27     |
| 16         | BS 88-3                 | 2.5/1.5          | 100, 101, 102, A, C                     | 45       | 45     | 45        | 45     |
| 16         | BS 88-3                 | 4.0/1.5          | 100, 101, 102, 103, A, C                | 74       | 74     | 74        | 74     |
| 16         | cb/RCBO Type B          | 1.5/1.0          | 100, 102, C                             | 27       | 27     | 15zs      | 27     |
| 16         | cb/RCBO Type C          | 1.5/1.0          | 100, 102, C                             | 27       | 27     | 27        | 27     |
| 16         | cb/RCBO Type D          | 1.5/1.0          | 100, 102, C                             | 27       | NPad   | 27        | 9zs    |
| **Radial final circuits (5 % voltage drop, terminal load) - Continued**                                                            |
| 16         | cb/RCBO Type B          | 2.5/1.5          | 100, 101, 102, A, C                     | 45       | 45     | 45        | 45     |
| 16         | cb/RCBO Type C          | 2.5/1.5          | 100, 101, 102, A, C                     | 45       | 24zs   | 45        | 43zs   |
| 16         | cb/RCBO Type D          | 2.5/1.5          | 100, 101, 102, A, C                     | 45       | NPzs   | 45        | 14zs   |
| 16         | cb/RCBO Type B          | 4.0/1.5          | 100, 101, 102, 103, A, C                | 69       | 32ad   | 69        | 69     |
| 16         | cb/RCBO Type C          | 4.0/1.5          | 100, 101, 102, 103, A, C                | 69       | 16zs   | 54ad      | 36zs   |
| 16         | cb/RCBO Type D          | 4.0/1.5          | 100, 101, 102, 103, A, C                | 69       | NPzs   | 18ad      | 9zs    |
| 20         | BS 3036                 | 2.5/1.5          | 100, 101, 102, A, C                     | NP       | NP     | NP        | NP     |
| 20         | cb/RCBO Type B          | 2.5/1.5          | 100, 101, 102, A, C                     | 42       | 42     | 42        | 42     |
| 20         | cb/RCBO Type C          | 2.5/1.5          | 100, 101, 102, A, C                     | 42       | 12zs   | 42        | 31zs   |
| 20         | cb/RCBO Type D          | 2.5/1.5          | 100, 101, 102, A, C                     | 42       | NPzs   | 42        | 8zs    |
| 20         | BS 3036                 | 4.0/1.5          | C, 100, 101, 102, A, C                  | 69       | 43zs   | 73        | 66zs   |
| 20         | cb/RCBO Type B          | 4.0/1.5          | C, 100, 101, 102, A, C                  | 69       | 69     | 69        | 69     |
| 20         | cb/RCBO Type C          | 4.0/1.5          | C, 100, 101, 102, A, C                  | 69       | 14zs   | 69        | 36zs   |
| 20         | cb/RCBO Type D          | 4.0/1.5          | C, 100, 101, 102, A, C                  | 69       | NPzs   | 69        | 9zs    |
| 20         | BS 3036                 | 6.0/2.5          | 100, 101, 102, 103, A, C                | 105      | 69zs   | 105       | 105    |
| 20         | cb/RCBO Type B          | 6.0/2.5          | 100, 101, 102, 103, A, C                | 105      | 107    | 105       | 105    |
| 20         | cb/RCBO Type C          | 6.0/2.5          | 100, 101, 102, 103, A, C                | 105      | 23zs   | 105       | 58zs   |
| 20         | cb/RCBO Type D          | 6.0/2.5          | 100, 101, 102, 103, A, C                | 105      | NPzs   | 105       | 15zs   |
| 20         | BS 88-2 (BS EN 60269-2) | 2.5/1.5          | 100, 102, A, C                          | 42       | 42     | 42        | 42     |
| 20         | BS 88-2 (BS EN 60269-2) | 4.0/1.5          | 100, 101, 102, A, C                     | 69       | 43zs   | 69        | 66zs   |
| 20         | BS 88-2 (BS EN 60269-2) | 6.0/2.5          | 100, 101, 102, 103, A, C                | 105      | 69zs   | 105       | 105    |
| 20         | BS 88-3                 | 2.5/1.5          | 100, 102, A, C                          | 42       | 42     | 42        | 42     |
| 20         | BS 88-3                 | 4.0/1.5          | 100, 101, 102, A, C                     | 69       | 43zs   | 69        | 69zs   |
| 20         | BS 88-3                 | 6.0/2.5          | 100, 101, 102, 103, A, C                | 105      | 69zs   | 105       | 105    |
| 25         | cb/RCBO Type B          | 2.5/1.5          | C                                      | 33       | 33     | 33        | 33     |
| 25         | cb/RCBO Type C          | 2.5/1.5          | C                                      | 33       | 2zs    | 33        | 22zs   |
| 25         | cb/RCBO Type D          | 2.5/1.5          | C                                      | 33       | NPzs   | 33        | 4zs    |
| 25         | cb/RCBO Type B          | 4.0/1.5          | 100, 102, A, C                          | 55       | 47zs   | 55        | 55     |
| 25         | cb/RCBO Type C          | 4.0/1.5          | 100, 102, A, C                          | 55       | 3zs    | 55        | 26sc   |
| 25         | cb/RCBO Type D          | 4.0/1.5          | 100, 102, A, C                          | 55       | NPzs   | 55        | 4zs    |
| 25         | cb/RCBO Type B          | 6.0/2.5          | 100, 101, 102, A, C                     | 83       | 75zs   | 83        | 83     |
| 25         | cb/RCBO Type C          | 6.0/2.5          | 100, 101, 102, A, C                     | 83       | 5zs    | 83        | 43zs   |
| 25         | cb/RCBO Type D          | 6.0/2.5          | 100, 101, 102, A, C                     | 83       | NPzs   | 83        | 7zs    |
| 25         | BS 88-2 (BS EN 60269-2) | 2.5/1.5          | C                                      | 31       | 20zs   | 31        | 31     |
| 25         | BS 88-2 (BS EN 60269-2) | 4.0/1.5          |
| 32         | cb/RCBO Type B          | 4.0/1.5          | C                                      | 43       | 43     | 43        | 43     |
| 32         | cb/RCBO Type C          | 4.0/1.5          | C                                      | 43       | 28zs   | 43        | 43     |
| 32         | cb/RCBO Type D          | 4.0/1.5          | C                                      | 43       | NPzs   | 43        | NPzs   |
| 32         | cb/RCBO Type B          | 6.0/2.5          | 100, 102, A, C                          | 63       | 45zs   | 63        | 63     |
| 32         | cb/RCBO Type C          | 6.0/2.5          | 100, 102, A, C                          | 63       | NPzs   | 63        | 26zs   |
| 32         | cb/RCBO Type D          | 6.0/2.5          | 100, 102, A, C                          | 63       | NPzs   | 63        | NPzs   |
| 32         | cb/RCBO Type B          | 10.0/4.0         | 100, 101, 102, 103, A, C                | 105      | 74zs   | 105       | 105zs  |
| 32         | cb/RCBO Type C          | 10.0/4.0         | 100, 101, 102, 103, A, C                | 105      | NPzs   | 105       | 42zs   |
| 32         | cb/RCBO Type D          | 10.0/4.0         | 100, 101, 102, 103, A, C                | 105      | NPzs   | 105       | NPsc   |
| 32         | BS 88-2 (BS EN 60269-2) | 4.0/1.5          | C                                      | 43       | 9zs    | 43        | 31zs   |
| 32         | BS 88-2 (BS EN 60269-2) | 6.0/2.5          | 100, 102, A, C                          | 63       | 15zs   | 63        | 50zs   |
| 32         | BS 88-2 (BS EN 60269-2) | 10.0/4.0         | 100, 101, 102, 103, A, C                | 105      | 24zs   | 105       | 82zs   |
| 32         | BS 88-3                 | 4.0/1.5          | C                                      | 43       | 5zs    | 43        | 27zs   |
| 32         | BS 88-3                 | 6.0/2.5          | 100, 102, A, C                          | 63       | 8zs    | 63        | 44zs   |
| 32         | BS 88-3                 | 10.0/4.0         | 100, 101, 102, 103, A, C                | 105      | 14zs   | 105       | 72zs   |
| 40         | cb/RCBO Type B          | 6.0/2.5          | C                                      | 46       | 23zs   | 46        | 46     |
| 40         | cb/RCBO Type C          | 6.0/2.5          | C                                      | 46       | NPzs   | 46        | 15zs   |
| 40         | cb/RCBO Type D          | 6.0/2.5          | C                                      | 46       | NPzs   | 46        | NPzs   |
| 40         | cb/RCBO Type B          | 10.0/4.0         | 100, 102, A, C                          | 72       | 37zs   | 72        | 72     |
| 40         | cb/RCBO Type C          | 10.0/4.0         | 100, 102, A, C                          | 72       | NPzs   | 72        | 25zs   |
| 40         | cb/RCBO Type D          | 10.0/4.0         | 100, 102, A, C                          | 72       | NPzs   | 72        | NPzs   |
| 40         | cb/RCBO Type B          | 16.0/6.0         | 100, 101, 102, 103, A, C                | 118      | 57zs   | 118       | 118    |
| 40         | cb/RCBO Type C          | 16.0/6.0         | 100, 101, 102, 103, A, C                | 118      | NPzs   | 118       | 39zs   |
| 40         | cb/RCBO Type D          | 16.0/6.0         | 100, 101, 102, 103, A, C                | 118      | NPzs   | 118       | NPad   |
| 40         | BS 88-2 (BS EN 60269-2) | 6.0/2.5          | C                                      | 46       | NPzs   | 46        | 32zs   |
| 40         | BS 88-2 (BS EN 60269-2) | 10.0/4.0         | 100, 102, A, C                          | 72       | NPzs   | 72        | 52zs   |
| 40         | BS 88-2 (BS EN 60269-2) | 16.0/6.0         | 100, 101, 102, 103, A, C                | 118      | NPzs   | 118       | 79zs   |



**NOTES to Table 7.1(ii):**

Voltage drop is the limiting constraint on the circuit cable length unless marked as follows:

- ▶ **ad** limited by the reduced CSA of the protective conductor (adiabatic limit);
- ▶ **ol** Cable/device/load combination not allowed in any of the installation conditions;
- ▶ **zs** limited by earth fault loop impedance Z<sub>s</sub>; and
- ▶ **sc** limited by line-to-neutral loop impedance (short-circuit).

The allowed installation methods are listed, see Tables 7.1(iii) and 7.1(iv) for further description.

**NP** - Not Permitted, prohibiting factor as NOTE 1.

For application of RCDs and RCBOs, see 3.6.4.

These notes provide important guidance on the limitations and conditions for using the circuit cable lengths outlined in the table.
*Found in the On-Site Guide 18th Edition, pages 75-83.*
![Author](/assets/blog/ow-read-blog-sticky-man.webp)

### Frequently Asked Questions

#### Q: How does cable size affect the maximum length of a circuit?

**A**: According to Regulation 7.1(ii) of BS 7671, the maximum cable length is influenced by the cable size, as larger cables can carry more current with less voltage drop. This means a larger cable size can allow for a longer circuit while staying within safe voltage drop limits.

#### Q: What installation methods are considered in determining maximum cable lengths?

**A**: Regulation 7.1(ii) includes several installation methods such as clipped direct (Method 100) or buried in insulation, which affect the maximum cable length due to differences in heat dissipation and current-carrying capacity. The allowed methods are detailed in Tables 7.1(iii) and 7.1(iv).

#### Q: Why is RCD protection important when determining cable lengths?

**A**: RCD protection is crucial because it affects the maximum cable length permissible under BS 7671. With RCD protection, circuits can be longer as the device provides additional safety against earth faults, thereby allowing for higher earth fault loop impedance (Zs) limits.

#### Q: What limitations might apply to certain circuit configurations?

**A**: Table 7.1(ii) includes several notes that outline limitations, such as restrictions due to earth fault loop impedance (Zs), line-to-neutral loop impedance (sc), or the reduced cross-sectional area (CSA) of the protective conductor (ad). These factors can prohibit the use of certain cable lengths or configurations.

#### Q: How do voltage drop considerations influence circuit design?

**A**: Voltage drop is the primary constraint on cable length as per Regulation 7.1(ii) in BS 7671. Typically, a 5% voltage drop is allowed for ring and radial circuits, while a 3% drop is the limit for lighting circuits. Ensuring that the circuit remains within these limits is critical for maintaining safe and efficient operation.
