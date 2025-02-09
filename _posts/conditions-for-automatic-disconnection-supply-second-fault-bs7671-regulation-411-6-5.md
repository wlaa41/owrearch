---
title: "Understanding Conditions for Automatic Disconnection of Supply in Case of a Second Fault"
excerpt: "Regulation 411.6.5 specifies the conditions required for automatic disconnection of supply when a second fault occurs on a different live conductor after a first fault. This regulation outlines the necessary steps for TN and IT systems to ensure safety."
date: "2024-09-08T05:35:07.322Z"
author:
  name: OW London Electrician and Home Automation Engineers Team
  role: Electrician, Smart Home Engineers
  picture: "/assets/blog/authors/ow.png"
tags: [Electrical Safety, Wiring Regulations, BS 7671, Compliance, TN System, IT System, Fault Loop Impedance, Protective Devices, Earthing System]
keywords: [Electrician London, Home Automation London, Electrician Near Me, Certified Electrical Compliance, Guide Note 3, Inspection and Testing, RCD, Fault Loop, Earth Resistance, Protective Conductor]
categories: [Electrical Safety, Compliance, Fault Protection]
coverImage: "/images/conditions-for-automatic-disconnection-supply-second-fault-bs7671-regulation-411-6-5.webp"
miniImage: "/images/conditions-for-automatic-disconnection-supply-second-fault-bs7671-regulation-411-6-5.webp"
ogImage:
  url: "/images/assets/blog/preview/read-blog-strip-ow-electrician-799-mini.webp"
lang: "en"
layout: "post"
social:
  twitter: "yourTwitterHandle"
  facebook: "yourFacebookPage"
faq: 
  - question: "What should be considered when exposed-conductive-parts are interconnected by a protective conductor collectively earthed to the same earthing system?"
    answer: "According to Regulation 411.6.5(i), conditions similar to a TN system apply. The fault loop impedance must satisfy specific formulas based on the system s voltage and the triggering current for protective devices."
  - question: "What is the significance of the voltage factor  C_{min}  in fault loop impedance calculations?"
    answer: "Regulation 411.6.5(i) explains that  C_{min}  accounts for voltage variations due to factors like transformer tap changes and other considerations. This ensures the impedance calculation remains valid under different conditions."
  - question: "What condition must be met for systems where exposed-conductive-parts are earthed in groups or individually?"
    answer: "As per Regulation 411.6.5(ii), the product of the earth resistance  R_A  and the current  I_a  must not exceed 50 volts to ensure safe disconnection of supply."
  - question: "How does the use of an RCD impact compliance with disconnection times?"
    answer: "Regulation 411.6.5(ii), **Note 4** highlights that using an RCD may require residual currents higher than the rated operating current to meet the disconnection times specified for TT systems."

schema:
  type: "Article"
  articleSection: "Engineering"
  publication: "Electrical and Smart Home Engineering Insights"
---

### Understanding Conditions for Automatic Disconnection of Supply in Case of a Second Fault

**Regulation 411.6.5 states:**

> "After the occurrence of a first fault, conditions for automatic disconnection of supply in the event of a second fault occurring on a different live conductor shall be as follows:
>
> (i) Where exposed-conductive-parts are interconnected by a protective conductor collectively earthed to the same earthing system, the conditions similar to a TN system apply and the following conditions shall be fulfilled where the neutral conductor is not distributed in AC systems and in DC systems where the midpoint conductor is not distributed:
> 
> $$ Z_s \leq \frac{U \times C_{min}}{2 I_a} $$
> 
> or where the neutral conductor or midpoint conductor respectively is distributed:
> 
> $$ Z_s \leq \frac{U_0 \times C_{min}}{2 I_a} $$
> 
> where:
> 
> - $ U $ is the nominal AC or DC voltage, in volts, between line conductors
> - $ U_0 $ is the nominal AC or DC voltage, in volts, between line conductor and neutral conductor or midpoint conductor, as appropriate
> - $ Z_s $ is the impedance in ohms of the fault loop comprising the line conductor and the protective conductor of the circuit
> - $ Z_s $ is the impedance in ohms of the fault loop comprising the neutral conductor and the protective conductor of the circuit
> - $ I_a $ is the current in amperes (A) causing operation of the protective device within the time required in Regulation 411.3.2.2 for TN systems or Regulation 411.3.2.3
> - $ C_{min} $ is the minimum voltage factor to take account of voltage variations depending on time and place, changing of transformer taps and other considerations.
> 
> **NOTE 1:** The time stated in Table 41.1 of Regulation 411.3.2.2 for the TN system is applicable to IT systems with a distributed or non-distributed neutral conductor or midpoint conductor.
> 
> **NOTE 2:** The factor 2 in both formulae takes into account that in the event of the simultaneous occurrence of two faults, the faults may exist in different circuits.
> 
> **NOTE 3:** For fault loop impedance, the most severe case should be taken into account, e.g., a fault on the line conductor at the supply source and simultaneously another fault on the neutral conductor of current-using equipment of the circuit considered.
> 
> (ii) Where the exposed-conductive-parts are earthed in groups or individually, the following condition applies:
> 
> $$ R_A \times I_a \leq 50V $$
> 
> where:
> 
> - $ R_A $ is the sum of the resistances, in ohms, of the earth electrode and the protective conductor to the exposed-conductive-parts
> - $ I_a $ is the current in amperes causing automatic disconnection of the protective device in a time complying with Regulation 411.3.2.2 for TN systems in Table 41.1 of Regulation 411.3.2.2 or in a time complying with Regulation 411.3.2.4.
> 
> **NOTE 4:** If compliance to the requirements of (ii) is provided by an RCD, compliance with the disconnection times required for TT systems in Table 41.1 may require residual currents significantly higher than the rated residual operating current $ I_\Delta n $ of the RCD applied."

$$ R_A \times I_a \leq 50V $$

### Explanation:

This regulation specifies the conditions for automatic disconnection of supply in the event of a second fault occurring on a different live conductor after a first fault. 

- **First part (i)**: If the exposed-conductive-parts are interconnected and earthed to the same earthing system, similar conditions to a TN system must be met. The formulas provided indicate the maximum allowable fault loop impedance based on the system's voltage and the current needed to trigger the protective device within the required time. The notes clarify that these conditions apply regardless of whether the neutral or midpoint conductor is distributed.

- **Second part (ii)**: For systems where exposed-conductive-parts are earthed individually or in groups, the product of the earth resistance $R_A$ and the current $I_a$ must not exceed 50 volts. If an RCD is used, it must ensure that disconnection times are met, possibly requiring higher residual currents than the RCD's rated operating current.

This regulation is crucial for ensuring safety in systems where multiple faults may occur simultaneously, particularly in IT systems where the fault path may be less direct than in TN or TT systems.

![Author](/assets/blog/ow-read-blog-sticky-man.webp)

### Frequently Asked Questions

#### Q: What should be considered when exposed-conductive-parts are interconnected by a protective conductor collectively earthed to the same earthing system?

**A**: According to Regulation 411.6.5(i), conditions similar to a TN system apply. The fault loop impedance must satisfy specific formulas based on the system's voltage and the triggering current for protective devices.

#### Q: How is the fault loop impedance determined when the neutral conductor is not distributed?

**A**: According to Regulation 411.6.5(i), the fault loop impedance $Z_s$ is calculated using the formula $Z_s \leq \frac{U \times C_{min}}{2 I_a}$.

#### Q: What is the significance of the voltage factor $C_{min}$ in fault loop impedance calculations?

**A**: Regulation 411.6.5(i) explains that $C_{min}$ accounts for voltage variations due to factors like transformer tap changes and other considerations. This ensures the impedance calculation remains valid under different conditions.

#### Q: What condition must be met for systems where exposed-conductive-parts are earthed in groups or individually?

**A**: As per Regulation 411.6.5(ii), the product of the earth resistance $R_A$ and the current $I_a$ must not exceed 50 volts to ensure safe disconnection of supply.

#### Q: How does the use of an RCD impact compliance with disconnection times?

**A**: Regulation 411.6.5(ii), **Note 4** highlights that using an RCD may require residual currents higher than the rated operating current to meet the disconnection times specified for TT systems.
