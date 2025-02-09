---
title: "Step-by-Step Guide to Testing and Verifying a Ring Final Circuit for Periodic Inspection, EIC, and EICR"
excerpt: "Testing and verifying a ring final circuit is essential for ensuring safety and compliance, particularly during periodic inspections, Electrical Installation Certificates (EIC), and Electrical Installation Condition Reports (EICR). This guide explains the key steps according to BS 7671 regulations."
date: "2024-09-08T05:35:07.322Z"
author:
  name: OW London Electrician and Home Automation Engineers Team
  role: Electrician, Smart Home Engineers
  picture: "/assets/blog/authors/ow.png"
tags: [Electrical Safety, Wiring Regulations, BS 7671, Compliance, Periodic Inspection, EIC, EICR, Testing, Verification]
keywords: [Electrician London, Home Automation London, Electrician Near Me, Certified Electrical Compliance, Guide Note 3, Inspection and Testing, Periodic Inspection, EIC, EICR, Electrical Testing, Ring Final Circuit]
categories: [Electrical Testing, Ring Final Circuit, Periodic Inspection]
coverImage: "/images/how-to-test-and-verify-a-ring-final-circuit-step-by-step-guide-periodic-inspection-eic-eicr.webp"
miniImage: "/images/how-to-test-and-verify-a-ring-final-circuit-step-by-step-guide-periodic-inspection-eic-eicr.webp"
ogImage:
  url: "/images/assets/blog/preview/read-blog-strip-ow-electrician-799-mini.webp"
lang: "en"
layout: "post"
social:
  twitter: "yourTwitterHandle"
  facebook: "yourFacebookPage"
faq: 
  - question: What are the critical steps to ensure a ring final circuit is properly tested and verified during periodic inspections?
    answer: The key steps include measuring the resistance of the conductors (r1, rn, r2), performing the Figure-of-Eight test for both r1 with rn and r1 with r2, and checking the resistance values at each socket outlet for consistency, as outlined in BS 7671 regulations. This is crucial for periodic inspections, EIC, and EICR.
  - question: How do you determine if a socket outlet has a fault during ring final circuit testing, especially in an EICR?
    answer: Measure the resistance at each socket outlet and compare it to the expected value. Significant deviations could indicate a fault, such as a loose connection or high resistance joint, as noted in BS 7671. Identifying such faults is vital during EICR.
  - question: What is the significance of the Figure-of-Eight test in verifying a ring final circuit during an EIC or EICR?
    answer: The Figure-of-Eight test, performed on both the line and neutral conductors and the line and protective conductors, checks for continuity and consistency in the circuit, ensuring there are no breaks or faults in the wiring, according to BS 7671. This test is a key component of EIC and EICR processes.

schema:
  type: "Article"
  articleSection: "Engineering"
  publication: "Electrical and Smart Home Engineering Insights"
---

### Step-by-Step Guide to Testing and Verifying a Ring Final Circuit for Periodic Inspection, EIC, and EICR

Testing and verifying a ring final circuit is essential for ensuring the circuit is correctly installed, safe, and functioning properly. This process is particularly important during periodic inspections, and for the issuance of Electrical Installation Certificates (EIC) and Electrical Installation Condition Reports (EICR). The following guide outlines the steps you need to take, in line with BS 7671 regulations.

<!-- ![Author](/images/how-to-test-and-verify-a-ring-final-circuit-step-by-step-guide-periodic-inspection-eic-eicr-cheatsheet.webp) -->


#### Step 1: Measure the Values of Conductors

Before starting with the specific tests, it’s crucial to measure the resistance values of the conductors within the ring final circuit. Specifically, you need to measure the resistance of the line conductor (**r1**), the neutral conductor (**rn**), and the circuit protective conductor (**r2**).

- **r1**: This is the resistance of the line conductor.
- **rn**: This is the resistance of the neutral conductor.
- **r2**: This is the resistance of the circuit protective conductor (CPC).

**Measurement Tips:**
- Ensure all power is disconnected before performing measurements.
- Use a low resistance ohmmeter for accurate readings.
- Record the measured values for **r1**, **rn**, and **r2**.

**Example:**
Let’s assume you measured the following values:

- **r1** = 0.32 ohms
- **rn** = 0.33 ohms
- **r2** = 0.53 ohms

#### Step 2: Figure-of-Eight Test (r1 and rn)

In this step, you will perform the "Figure-of-Eight" test, which involves cross-connecting the ends of the line (**r1**) and neutral (**rn**) conductors to create a continuous loop. The purpose of this test is to check for any potential breaks or high resistance joints in the conductors. This test is crucial during periodic inspections and for completing an EIC or EICR.

**Procedure:**
- Cross-connect the ends of **r1** and **rn** at the distribution board.
- Measure the resistance at each socket outlet on the ring circuit.
- The resistance value should be consistent across all sockets, and close to the calculated expected value.

**Equation:**
The expected resistance at each socket is given by:

$$ R_{expected} = \frac{r1 + rn}{4} $$

Where $$R_{expected}$$ is the expected resistance at each socket.

**Example:**
Given **r1** = 0.32 ohms and **rn** = 0.33 ohms, the expected resistance:

$$
R_{expected} = \frac{0.32 + 0.33}{4} = 0.1625 \, \text{ohms}
$$

When you measure the resistance at each socket, the values should be approximately 0.1625 ohms. Any significant deviation could indicate a problem, such as a loose connection or a fault in the wiring, which needs to be addressed during periodic inspections or when issuing an EIC or EICR.

**Measurement Tips:**
- Measure at each socket and record the values.
- If one socket shows a significantly different reading, inspect that socket for faults.

#### Step 3: Figure-of-Eight Test (r1 and r2)

This step involves performing a similar Figure-of-Eight test, but this time cross-connecting the ends of the line conductor (**r1**) and the circuit protective conductor (**r2**). The purpose of this test is to verify the integrity of the protective conductor loop, which is critical for safety and must be checked during periodic inspections and in EICR processes.

**Procedure:**
- Cross-connect the ends of **r1** and **r2** at the distribution board.
- Measure the resistance at each socket outlet on the ring circuit.
- The resistance value should be consistent across all sockets and close to the calculated expected value.

**Equation:**
The expected resistance at each socket is given by:

$$
R_{expected} = \frac{r1 + r2}{4}
$$

Where $R_{expected}$ is the expected resistance at each socket.

**Example:**
Given **r1** = 0.32 ohms and **r2** = 0.53 ohms, the expected resistance:

$$
R_{expected} = \frac{0.32 + 0.53}{4} = 0.2125 \, \text{ohms}
$$

When you measure the resistance at each socket, the values should be approximately 0.2125 ohms. Similar to the previous step, significant deviations may indicate an issue that needs to be addressed, especially during periodic inspections, EIC, or EICR.

#### Step 4: Verify the Circuit Length

To ensure the length of the ring final circuit is correct, you need to calculate the circuit length using the measured resistances and a reference resistance value from the **Resistance Table for Copper and Aluminium Conductors** in the **On-Site Guide (Table I1)**.

**Equation:**
The circuit length in meters can be calculated using the following formula:

$$
Circuit length (meters) = \left( \frac{\text{Measured } (r1 + r2) \, \text{(Ω)}}{\text{Resistance Table I1 (mΩ/m)}} \right) \times 1000
$$

Visit the [Table I1 On-Site Guide Page 218 here](https://www.owelectric.co.uk/posts/calculating-cable-length-from-resistance-eic-eicr-periodic-testing-regulation/).

Where:
- **Measured (r1 + r2)** is the sum of the measured resistance of the line conductor (**r1**) and the circuit protective conductor (**r2**) in ohms (Ω).
- **Resistance Table (mΩ/m)** is the resistance value per meter from the Resistance Table for the conductor's cross-sectional area, found in Table I1 of the On-Site Guide.

**Example:**
Suppose the measured resistance is **r1 + r2 = 0.85 Ω**. Assuming the resistance per meter for the conductor size you are using is **18.1 mΩ/m**, the circuit length would be:

$$
Circuit length = \left( \frac{0.85 \, \text{Ω}}{18.1 \, \text{mΩ/m}} \right) \times 1000 = 46.96 \, \text{meters}
$$

This calculation allows you to verify that the circuit length matches the expected length based on the installation. Any discrepancies could indicate an issue with the circuit, such as an incorrect cable size or unexpected faults, which should be addressed during periodic inspections, EIC, or EICR.

#### Step 5: Check the Cable Length Against the Maximum Allowed

After calculating the circuit length, it's essential to verify that the cable length is within the maximum limits specified in **Table 7.1(ii) Maximum cable length for a 230 V final circuit using 70 °C thermoplastic (PVC) insulated and sheathed flat cable** in the On-Site Guide, 18th Edition (pages 75-83).

This table provides the maximum allowed cable lengths for various conductor sizes and installation conditions, ensuring that the voltage drop is within acceptable limits according to **BS 7671**.

For detailed guidance, visit [Maximum Cable Length for a 230V Final Circuit](https://www.owelectric.co.uk/posts/maximum-cable-length-230v-final-circuit-bs-7671/).

For more detailed information on calculating cable length from resistance, you can visit 

![Author](/assets/blog/ow-read-blog-sticky-man.webp)

### Frequently Asked Questions

#### Q: What are the critical steps to ensure a ring final circuit is properly tested and verified during periodic inspections?

**A**: The key steps include measuring the resistance of the conductors (**r1**, **rn**, **r2**), performing the Figure-of-Eight test for both **r1** with **rn** and **r1** with **r2**, and checking the resistance values at each socket outlet for consistency, as outlined in **BS 7671** regulations. This is crucial for periodic inspections, EIC, and EICR.

#### Q: How do you determine if a socket outlet has a fault during ring final circuit testing, especially in an EICR?

**A**: Measure the resistance at each socket outlet and compare it to the expected value. Significant deviations could indicate a fault, such as a loose connection or high resistance joint, as noted in **BS 7671**. Identifying such faults is vital during EICR.

#### Q: What is the significance of the Figure-of-Eight test in verifying a ring final circuit during an EIC or EICR?

**A**: The Figure-of-Eight test, performed on both the line and neutral conductors and the line and protective conductors, checks for continuity and consistency in the circuit, ensuring there are no breaks or faults in the wiring, according to **BS 7671**. This test is a key component of EIC and EICR processes.

