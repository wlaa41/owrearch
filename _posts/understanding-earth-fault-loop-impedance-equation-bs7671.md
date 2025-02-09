---
title: "Understanding the Earth Fault Loop Impedance Equation and Its Values According to BS 7671"
excerpt: "Regulation 411.4.4 or 411.5.4 states The value of earth fault loop impedance satisfies the following equation(Appendix 3, BS 7671)"
date: "2024-09-08T05:35:07.322Z"
author:
  name: OW London Electrician and Home Automation Engineers Team
  role: Electrician, Smart Home Engineers
  picture: "/assets/blog/authors/ow.png"
tags: [Electrical Safety, Wiring Regulations, BS 7671, Compliance, Earth Fault Loop Impedance, Appendix 3, Inspection and Testing, TN and TT systems, Automatic Disconnection, Electrical Installation]
keywords: [Electrician London, Home Automation London, Earth Fault Loop, BS 7671 Appendix 3, Electrical Safety, Overcurrent Protective Devices, Compliance, Protective Devices, Voltage Factor, Zs Equation, Fault Current]
categories: [Electrical Compliance]
coverImage: "/images/understanding-earth-fault-loop-impedance-equation-bs7671.webp"
miniImage: "/images/understanding-earth-fault-loop-impedance-equation-bs7671.webp"
ogImage:
  url: "/images/assets/blog/preview/read-blog-strip-ow-electrician-799-mini.webp"
lang: "en"
layout: "post"
social:
  twitter: "yourTwitterHandle"
  facebook: "yourFacebookPage"
faq: 
  - question: What is the significance of the 0.8 factor in the earth fault loop impedance equation?
    answer: According to BS 7671 Appendix 3  The 0.8 factor accounts for the increase in conductor resistance due to temperature rise caused by load current. This ensures that the impedance measurement remains valid under operational conditions.
  - question: What does the term Z_s(m) represent in the context of BS 7671?
    answer: According to BS 7671 Appendix 3  is the measured impedance of the earth fault current loop from the origin of the installation to the most distant point of the relevant circuit. This measurement helps to ensure that the circuit meets safety requirements for automatic disconnection.
  - question: How does C_{min} affect the earth fault loop impedance calculation?
    answer: According to BS 7671 Appendix 3  is the minimum voltage factor that takes into account potential variations in the voltage supplied to the installation. This ensures that even in the worst-case voltage scenarios, the protective devices will operate correctly.
  - question: Why is the nominal voltage U_0 used in the earth fault loop impedance formula?
    answer: According to BS 7671 Appendix 3  The nominal voltage U_0 represents the standard AC rms line voltage to Earth, which is a key parameter in calculating the necessary impedance to trigger protective devices within the required time frame.
  - question: What does I_a represent in the earth fault loop impedance equation?
    answer: According to BS 7671 Appendix 3  I_a is the current in amperes that causes the operation of the protective device within the time specified in Table 41.1 of BS 7671, ensuring safety by preventing prolonged fault conditions.

schema:
  type: "Article"
  articleSection: "Engineering"
  publication: "Electrical and Smart Home Engineering Insights"
---

### Understanding the Earth Fault Loop Impedance Equation and Its Values According to BS 7671

In electrical installations, ensuring the correct operation of protective devices is paramount. One crucial aspect is the earth fault loop impedance, which must be measured and maintained within specified limits. This is particularly relevant for TN and TT systems where automatic disconnection of supply is provided by overcurrent protective devices.

**Regulation 411.4.4 or 411.5.4 states:**

> "The value of earth fault loop impedance satisfies the following equation:
> 
> $ Z_s(m) \leq 0.8 \times \frac{U_0 \times C_{min}}{I_a} $ 
> 
> - **where:**
>   - $Z_s(m)$ is the measured impedance of the earth fault current loop up to the most distant point of the relevant circuit from the origin of the installation (Ω).
>   - 0.8 is a factor to take into account the increase of resistance of the conductors with the increase of temperature due to load current.
>   - $U_0$ is the nominal AC rms line voltage to Earth (V).
>   - $I_a$ is the current in amperes causing operation of the protective device within the time stated in Table 41.1 or within 5 s according to the conditions stated in Regulation 411.3.2.3.
>   - $C_{min}$ is the minimum voltage factor to take account of voltage variations depending on time and place, changing of transformer taps and other considerations."
> 
> - **NOTE:** For a low voltage supply given in accordance with the Electricity Safety, Quality and Continuity Regulations (ESQCR) as amended, $C_{min}$ is given the value 0.95."

The above regulation is detailed in Appendix 3 of BS 7671, which provides guidance on the methods to ensure that the earth fault loop impedance remains within safe operational limits. The equation given allows for the correction of measured impedance values to account for increases in conductor resistance due to temperature rise, ensuring that the protective devices will still operate effectively in fault conditions.

### Example Calculation

Let s consider a practical example to illustrate how this equation is applied:

- **Given:**
  - $U_0$ (Nominal voltage to Earth) = 230V
  - $I_a$ (Current required to operate the protective device) = 100A
  - $C_{min}$ (Minimum voltage factor) = 0.95

- **Step 1: Apply the Earth Fault Loop Impedance Equation**

The equation provided by BS 7671 Appendix 3 is:
  
$$ Z_s(m) \leq 0.8 \times \frac{U_0 \times C_{min}}{I_a} $$

- **Step 2: Substitute the Values**

Substituting the given values:

$$ Z_s(m) \leq 0.8 \times \frac{230V \times 0.95}{100A} $$

- **Step 3: Calculate the Result**

Calculate the value:

$$ Z_s(m) \leq 0.8 \times \frac{218.5V}{100A} $$

$$ Z_s(m) \leq 0.8 \times 2.185Ω $$

$$ Z_s(m) \leq 1.748Ω $$

- **Conclusion:**

For this circuit, the measured earth fault loop impedance must be **1.748Ω or less** to ensure that the protective device operates correctly within the required time.

This calculation demonstrates the importance of accurately measuring and considering all factors affecting the earth fault loop impedance to maintain compliance with BS 7671.

![Author](/assets/blog/ow-read-blog-sticky-man.webp)

### Frequently Asked Questions

#### Q: What is the significance of the 0.8 factor in the earth fault loop impedance equation?

**A**: **According to BS 7671 Appendix 3:** The 0.8 factor accounts for the increase in conductor resistance due to temperature rise caused by load current. This ensures that the impedance measurement remains valid under operational conditions.

#### Q: What does the term $Z_s(m)$ represent in the context of BS 7671?

**A**: **According to BS 7671 Appendix 3:** $Z_s(m)$ is the measured impedance of the earth fault current loop from the origin of the installation to the most distant point of the relevant circuit. This measurement helps to ensure that the circuit meets safety requirements for automatic disconnection.

#### Q: How does $C_{min}$ affect the earth fault loop impedance calculation?

**A**: **According to BS 7671 Appendix 3:** $C_{min}$ is the minimum voltage factor that takes into account potential variations in the voltage supplied to the installation. This ensures that even in the worst-case voltage scenarios, the protective devices will operate correctly.

#### Q: Why is the nominal voltage $U_0$ used in the earth fault loop impedance formula?

**A**: **According to BS 7671 Appendix 3:** The nominal voltage $U_0$ represents the standard AC rms line voltage to Earth, which is a key parameter in calculating the necessary impedance to trigger protective devices within the required time frame.

#### Q: What does $I_a$ represent in the earth fault loop impedance equation?

**A**: **According to BS 7671 Appendix 3:** $I_a$ is the current in amperes that causes the operation of the protective device within the time specified in Table 41.1 of BS 7671, ensuring safety by preventing prolonged fault conditions.



