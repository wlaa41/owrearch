---
title: "Understanding Main Earthing Terminals and Protective Conductors with Focus on K Value and Calculations"
excerpt: "BS 7671 regulations mandate that main earthing terminals connect key protective conductors to ensure safety against electrical faults. Proper selection of cross-sectional area (CSA) for protective conductors is crucial. The 'k' value, which considers material properties, helps determine the correct CSA, ensuring conductors can safely handle fault currents. This precise sizing is vital for maintaining the safety and reliability of electrical systems."
date: "2024-09-12T05:35:07.322Z"
author:
  name: OW London Electrician and Home Automation Engineers Team
  role: Electrician, Smart Home Engineers
  picture: "/assets/blog/authors/ow.png"
tags: [Electrical Safety, Wiring Regulations, BS 7671, Compliance, Earthing, Protective Conductors, Cross-Sectional Area, Bonding, Lightning Protection]
keywords: [Electrician London, Home Automation London, Electrician Near Me, Certified Electrical Compliance, Guide Note 3, Inspection and Testing, Earthing, Protective Conductor Sizing, Lightning Protection, Electrical Installation Safety]
categories: [Electrical Safety, Compliance]
coverImage: "/images/main-earthing-terminals-and-protective-conductors-bs7671-regulation.webp"
miniImage: "/images/main-earthing-terminals-and-protective-conductors-bs7671-regulation.webp"
ogImage:
  url: "/images/assets/blog/preview/read-blog-strip-ow-electrician-799-mini.webp"
lang: "en"
layout: "post"
social:
  twitter: "yourTwitterHandle"
  facebook: "yourFacebookPage"
faq:
  - question: What should be connected to the main earthing terminal in an electrical installation?
    answer: According to Regulation 542.4.1, the main earthing terminal must connect the circuit protective conductors, protective bonding conductors, functional earthing conductors (if required), and the lightning protection system bonding conductor, if applicable.
  - question: How should the cross-sectional area of a protective conductor be determined if it is not part of a cable or conduit?
    answer: As per Regulation 543.1.1, if a protective conductor is not an integral part of a cable, conduit, ducting, trunking, or enclosure, its cross-sectional area must be at least 2.5 mm² copper equivalent with mechanical protection or 4 mm² without mechanical protection.
  - question: What is required to facilitate the measurement of earthing arrangements in an installation?
    answer: Regulation 542.4.2 requires that an accessible means for disconnecting the earthing conductor must be provided to facilitate the measurement of earthing arrangements. This may be combined with the main earthing terminal and must be disconnectable only by a tool.
  - question: What factors should be considered when calculating the cross-sectional area of a protective conductor?
    answer: Regulation 543.1.3 states that the cross-sectional area should be calculated using the formula $S = \sqrt{\frac{I^2 t}{k}}$, where I is the fault current, t is the operating time of the protective device, and k is a material-specific constant.
  - question: What should be done if a protective conductor serves multiple circuits?
    answer: According to Regulation 543.1.2, if a protective conductor is shared by multiple circuits, its cross-sectional area must be calculated for the most demanding fault current and operating time or selected based on the largest line conductor in the circuits.

schema:
  type: "Article"
  articleSection: "Engineering"
  publication: "Electrical and Smart Home Engineering Insights"
---

### Understanding Main Earthing Terminals and Protective Conductors with Focus on 'k' Value and Calculations in the adiabatic equation

BS 7671 regulations outline critical requirements for the implementation of main earthing terminals and the determination of cross-sectional areas (CSA) for protective conductors in electrical installations. The main earthing terminal is a crucial connection point for various protective conductors, ensuring a unified safety reference to protect against electrical faults.

The standards emphasize the importance of selecting the appropriate CSA for protective conductors, considering factors like mechanical protection and exposure. The 'k' value, which reflects the material properties, is key in determining the correct CSA, ensuring that the conductors can handle expected fault currents without overheating or failure. Proper sizing is essential to maintain the safety and integrity of the entire electrical system.



**Regulation 542.4.1 states:**

> "In every installation a main earthing terminal shall be provided to connect the following to the earthing conductor:  
> - The circuit protective conductors  
> - The protective bonding conductors  
> - Functional earthing conductors (if required)  
> - Lightning protection system bonding conductor, if any (see Regulation 411.3.1.2)."

This regulation emphasizes that all essential protective conductors must be securely connected to the main earthing terminal, ensuring a common reference point for safety and protection against electrical faults.

**Regulation 542.4.2 further explains:**

> "To facilitate measurement of the resistance of the earthing arrangements, means shall be provided in an accessible position for disconnecting the earthing conductor. Such means may conveniently be combined with the main earthing terminal or bar. Any joint shall be capable of disconnection only by means of a tool."

This ensures that electricians can easily disconnect and test the earthing system to verify its integrity, which is vital for maintaining electrical safety over the system's lifetime.

Moving on to protective conductors, BS 7671 provides detailed instructions on determining the correct cross-sectional areas.

**Regulation 543.1.1 specifies:**

> "The cross-sectional area of every protective conductor, other than a protective bonding conductor, shall be:  
> (i) calculated in accordance with Regulation 543.1.3, or  
> (ii) selected in accordance with Regulation 543.1.4.  
> - If the protective conductor is not an integral part of a cable, conduit, ducting, or trunking, the cross-sectional area shall be not less than 2.5 mm² copper equivalent with mechanical protection and 4 mm² without mechanical protection."

This regulation highlights the importance of considering the physical protection provided to the conductor when selecting its size. If the conductor is exposed, a larger cross-sectional area is necessary to prevent damage and maintain safety.

**Regulation 543.1.3** provides a formula for calculating the required cross-sectional area **Adiabatic Equation**:

> # $ S = \frac{\sqrt{I^2 t}}{k} $
> 
> Where:
> - **S** is the nominal cross-sectional area of the conductor in mm².
> - **I** is the fault current in amperes (rms for AC).
> - **t** is the operating time of the protective device in seconds.
> - **k** is a factor accounting for the material properties of the conductor.
> 
> This formula ensures that the protective conductor is adequately sized to handle the expected fault currents, preventing overheating or failure during fault conditions.

> **Values of k for protective conductors in various use or service are as given in Tables 54.2 to 54.6.**  
> The values are based on the initial and final temperatures indicated in each table.
>
> **TABLE 54.2**  
> Values of k for insulated protective conductor not incorporated in a cable and not bunched with cables, or for separate bare protective conductor in contact with cable covering but not bunched with cables, where the assumed initial temperature is 30°C.
>
> | Material of conductor | Insulation of protective conductor or cable covering |  |  |  
> |-----------------------|------------------------------------------------------|--|--|  
> |                       | 70°C thermoplastic | 90°C thermoplastic | 90°C thermosetting |  
> | Copper                | 143/133*           | 143/133*           | 176                 |  
> | Aluminium             | 95/88*             | 95/88*             | 116                 |  
> | Steel                 | 52                 | 52                 | 64                  |  
> | Assumed initial temperature | 30°C | 30°C | 30°C |  
> | Final temperature     | 160°C/140°C*       | 160°C/140°C*       | 250°C               |
>  
> * Above 300 mm²
>

> **TABLE 54.3**  
> Values of k for protective conductor incorporated in a cable or bunched with cables, where the assumed initial temperature is 70°C or greater.
>
> | Material of conductor | Insulation material |  |  |  
> |-----------------------|---------------------|--|--|  
> |                       | 70°C thermoplastic | 90°C thermoplastic | 90°C thermosetting |  
> | Copper                | 115/103*           | 100/86*            | 143                 |  
> | Aluminium             | 76/68*             | 66/57*             | 94                  |  
> | Assumed initial temperature | 70°C         | 90°C               | 90°C                |  
> | Final temperature     | 160°C/140°C*       | 160°C/140°C*       | 250°C               |
> 
> * Above 300 mm²
>

> **TABLE 54.4**  
> Values of k for the sheath or armour of a cable as the protective conductor.
>
> | Material of conductor | Insulation material |    |  |
> |-----------------------|---------------------|  --|--|
> |                       | 70°C thermoplastic | 90°C thermoplastic | 90°C thermosetting |  
> | Aluminium             | 93                 | 85                 | 85                  |  
> | Steel                 | 51                 | 46                 | 46                  |  
> | Lead                  | 26                 | 23                 | 23                  |  
> | Assumed initial temperature | 60°C         | 80°C               | 80°C                |  
> | Final temperature     | 200°C              | 200°C               | 200°C                |

> **TABLE 54.5**  
> Values of k for steel conduit, ducting and trunking as the protective conductor.
>
> | Material of protective conductor | Insulation material |  |  |  
> |----------------------------------|---------------------|--|--|  
> |                                  | 70°C thermoplastic | 90°C thermoplastic | 90°C thermosetting |  
> | Steel conduit, ducting and trunking | 47               | 44                 | 58                  |  
> | Assumed initial temperature       | 50°C              | 60°C              | 60°C                |  
> | Final temperature                 | 160°C             | 160°C             | 250°C               |

> **TABLE 54.6**  
> Values of k for bare conductor where there is no risk of damage to any neighbouring material by the temperatures indicated.
>
> **NOTE:** The temperatures indicated are valid only where they do not impair the quality of the connections.
>
> | Material of conductor | Conditions |    |  |
> |-----------------------|------------|  --|--|
> |                       | Visible and in restricted areas | Normal conditions | Fire risk |  
> | Copper                | 228                        | 159               | 138       |  
> | Aluminium             | 125                        | 91                | 105       |  
> | Steel                 | 82                         | 58                | 50        |  
> | Assumed initial temperature | 30°C | 30°C | 30°C |  
> | Final temperature     | Copper conductor: 500°C   | 200°C             | 150°C     |  
> |                       | Aluminium conductor: 300°C | 200°C             | 150°C     |  
> |                       | Steel conductor: 500°C    | 200°C             | 150°C     |


> **Regulation 543.1.4 specifies:**  
> Where it is desired not to calculate the minimum cross-sectional area of a protective conductor in accordance with Regulation 543.1.3, the cross-sectional area may be determined in accordance with Table 54.7. Where the application of Table 54.7 produces a non-standard size, a conductor having a larger standard cross-sectional area shall be used.
>
> **TABLE 54.7**  
> Minimum cross-sectional area of protective conductor in relation to the cross-sectional area of associated line conductor
>
> | Cross-sectional area of line conductor (S) | Minimum cross-sectional area of the corresponding protective conductor |    |
> |--------------------------------------------|-------------------------------------------------------------------|  --|
> |                                            | If the protective conductor is of the same material as the line conductor | If the protective conductor is not of the same material as the line conductor |  
> | (mm²)                                      | (mm²) | (mm²) |  
> | S ≤ 16                                     | S    | $k_1/k_2 × S $|  
> | 16 < S ≤ 35                                | 16   | $k_1/k_2 × 16 $|  
> | S > 35                                     | S/2  | $k_1/k_2 × S/2 $|  
>
> where:  
> - $k_1$ is the value of k for the line conductor, selected from Table 43.1 in Chapter 43 according to the materials of both conductor and insulation.  
> - $ k_2 $ is the value of k for the protective conductor, selected from Tables 54.2 to 54.6, as applicable.

![Author](/assets/blog/ow-read-blog-sticky-man.webp)

### Frequently Asked Questions

#### Q: What should be connected to the main earthing terminal in an electrical installation?

**A**: **According to Regulation 542.4.1**, the main earthing terminal must connect the circuit protective conductors, protective bonding conductors, functional earthing conductors (if required), and the lightning protection system bonding conductor, if applicable.

#### Q: How should the cross-sectional area of a protective conductor be determined if it is not part of a cable or conduit?

**A**: **As per Regulation 543.1.1**, if a protective conductor is not an integral part of a cable, conduit, ducting, trunking, or enclosure, its cross-sectional area must be at least 2.5 mm² copper equivalent with mechanical protection or 4 mm² without mechanical protection.

#### Q: What is required to facilitate the measurement of earthing arrangements in an installation?

**A**: **Regulation 542.4.2** requires that an accessible means for disconnecting the earthing conductor must be provided to facilitate the measurement of earthing arrangements. This may be combined with the main earthing terminal and must be disconnectable only by a tool.

#### Q: What factors should be considered when calculating the cross-sectional area of a protective conductor?

**A**: **Regulation 543.1.3** states that the cross-sectional area should be calculated using the formula $S = \sqrt{\frac{I^2 t}{k}}$, where I is the fault current, t is the operating time of the protective device, and k is a material-specific constant.

#### Q: What should be done if a protective conductor serves multiple circuits?

**A**: **According to Regulation 543.1.2**, if a protective conductor is shared by multiple circuits, its cross-sectional area must be calculated for the most demanding fault current and operating time or selected based on the largest line conductor in the circuits.
