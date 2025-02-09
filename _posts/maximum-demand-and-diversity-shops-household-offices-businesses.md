---
title: "How Should Maximum Demand and Diversity Be Calculated for Different Premises Types?"
excerpt: "Table H2 from Guidance Note 1 (page 209) provides detailed guidelines on calculating maximum demand and applying diversity for different premises, such as individual household installations, small shops, and small hotels. These guidelines ensure the electrical installation's safety and efficiency by considering various factors like lighting, heating, motors, and water heaters. According to the BS 7671 regulations, the proper application of diversity helps in preventing overloading while allowing for an efficient use of electrical systems."
date: "2024-09-11T05:35:07.322Z"
author:
  name: OW London Electrician and Home Automation Engineers Team
  role: Electrician, Smart Home Engineers
  picture: "/assets/blog/authors/ow.png"
tags: [Electrical Safety, Wiring Regulations, BS 7671, Compliance, Maximum Demand, Diversity Factors, Electrical Installation Design, Electrical Load, Guidance Note 1, Safe Electrical Design, Energy Efficiency]
categories: [Electrical Design, Compliance]
coverImage: "/images/maximum-demand-and-diversity-guidance-note1.webp"
miniImage: "/images/maximum-demand-and-diversity-guidance-note1.webp"
ogImage:
  url: "/images/assets/blog/preview/read-blog-strip-ow-electrician-799-mini.webp"
lang: "en"
layout: "post"
social:
  twitter: "yourTwitterHandle"
  facebook: "yourFacebookPage"
faq: 
  - question: What is the maximum demand calculation for lighting circuits in different types of premises?
    answer: According to Table H2 of Guidance Note 1, the maximum demand for lighting circuits is calculated as 66% of the total current demand in individual household installations, 90% in small shops, and 75% in small hotels.
  - question: How should diversity be applied to heating and power circuits?
    answer: For heating and power circuits, Table H2 states that for individual household installations, 100% of the total current demand up to 10 A should be considered, plus 50% of any current demand exceeding 10 A. Different percentages apply to small shops and hotels, as specified in the table.
  - question: Are there specific diversity rules for thermostatically controlled water heaters?
    answer: Yes, Table H2 explicitly states that no diversity is allowed for thermostatically controlled water heaters across all types of premises. This ensures the circuit is fully capable of handling the load without any risk of overloading.
  - question: Can diversity be applied to electric vehicle (EV) charging circuits?
    answer: According to the notes in Table H2, diversity should not be applied to circuits intended for electric vehicle (EV) charging.
  - question: Is load curtailment considered in maximum demand calculations?
    answer: Yes, the notes in Table H2 allow designers to consider load curtailment, including load reduction or disconnection, either automatically or manually, when determining the maximum demand of an installation.

schema:
  type: "Article"
  articleSection: "Engineering"
  publication: "Electrical and Smart Home Engineering Insights"
---

### How Should Maximum Demand and Diversity Be Calculated for Different Premises Types?

**Table H2 from Guidance Note 1 states:**

> | Purpose of final circuit fed from conductors or switchgear to which diversity applies | Type of premises                                                                                                                                                                              |
> |--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
> |                                                                                      | Individual household installations including individual dwellings of a block               | Small shops, stores, offices and business premises                              | Small hotels, boarding houses, guest houses, etc.                                                                                                                                                       |
> | 1. Lighting                                                                           | 66% of total current demand                                                              | 90% of total current demand                                                    | 75% of total current demand                                                                                                                                                                             |
> | 2. Heating and power (but see 3 to 8 below)                                           | 100% of total current demand up to 10 A + 50% of any current demand in excess of 10 A    | 100% **f.l.** of largest appliance + 75% **f.l.** of remaining appliances             | 100% **f.l.** of largest appliance + 80% **f.l.** of 2nd largest appliance + 60% **f.l.** of remaining appliances                                                                                                   |
> | 3. Cooking appliances                                                                 | 10 A + 30% **f.l.** of connected cooking appliances in excess of 10 A + 5 A if socket-outlet incorporated in control unit   | 100% **f.l.** of largest appliance + 80% **f.l.** of 2nd largest appliance + 60% **f.l.** of remaining appliances | 100% **f.l.** of largest appliance + 80% **f.l.** of 2nd largest appliance + 60% **f.l.** of remaining appliances                                             |
> | 4. Motors (other than lift motors, which are subject to special consideration)       | Not applicable                                                                          | 100% **f.l.** of largest motor + 80% **f.l.** of 2nd largest motor + 60% **f.l.** of remaining motors | 100% **f.l.** of largest motor + 50% **f.l.** of remaining motors                                                             |
> | 5. Water heaters (instantaneous type)**\***                                                | 100% **f.l.** of largest appliance + 100% **f.l.** of 2nd largest appliance + 25% **f.l.** of remaining appliances  | 100% **f.l.** of largest appliance + 100% **f.l.** of 2nd largest appliance + 25% **f.l.** of remaining appliances | 100% **f.l.** of largest appliance + 100% **f.l.** of 2nd largest appliance + 25% **f.l.** of remaining appliances                                             |
> | 6. Water heaters (thermostatically controlled)                                        | No diversity allowable **†**                                                                 | No diversity allowable **†**                                                       | No diversity allowable **†**                                                                                                                                                                                 |
> | 7. Floor warming installations                                                       | No diversity allowable **†**                                                                 | No diversity allowable **†**                                                       | No diversity allowable **†**                                                                                                                                                                                 |
> | 8. Thermal storage space heating installations                                        | No diversity allowable **†**                                                                 | No diversity allowable **†**                                                       | No diversity allowable **†**                                                                                                                                                                                 |
> | 9. Standard arrangement of final circuits in accordance with Appendix C              | 100% of current demand of largest circuit + 40% of current demand of every other circuit | 100% of current demand of largest circuit + 50% of current demand of every other circuit | 100% of current demand of largest circuit + 50% of current demand of every other circuit |
> | 10. Socket-outlets other than those included in 9 above and stationary equipment other than those listed above | 100% of current demand of largest point of utilization + 40% of current demand of every other point of utilization | 100% of current demand of largest point of utilization + 75% of current demand of every other point of utilization | 100% of current demand of largest point of utilization + 75% of current demand of every other point in main rooms (dining rooms, etc.) + 40% of current demand of every other point of utilization |
>
> **NOTES:**
>
> - **\*** In this context, an instantaneous water heater is deemed to be a water heater of any loading which heats water only while the tap is turned on and therefore uses electricity intermittently.
> - **†** It is important to ensure that the distribution boards, etc., are of sufficient rating to take the total load connected to them without the application of any diversity.
> - **f.l.** means full load.
> - **Circuits intended for electric vehicle (EV)** charging should not have diversity applied to them.
> - Load curtailment, including load reduction or disconnection, either automatically or manually, may be taken into account by the designer when determining the maximum demand of an installation or part thereof.
> - After the design currents for all the circuits have been determined, enabling the conductor sizes to be chosen, it is necessary to check that the design complies with the requirements of Part 4 of BS 7671 and that the limitation on voltage drop is met.

**Table A2 from On-Site Guid Appendix A states:**

> | Purpose of the final circuit fed from the conductors or switchgear to which the diversity applies | Individual household installations, including individual dwellings of a block | Small shops, stores, offices, and business premises | Small hotels, boarding houses, guest houses, etc. |
> |---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
> | 1 Lighting                                                                                       | 66% of total current demand                                                       | 90% of total current demand                                                       | 75% of total current demand                                                               |
> | 2 Heating and power (but see 3 to 8 below)                                                       | 100% of total current demand up to 10 A + 50% of any current demand in excess of 10 A | 100% f.l. of largest appliance +75% f.l. of remaining appliances               | 100% f.l. of largest appliance +80% f.l. of second largest appliance +60% f.l. of remaining appliances |
> | 3 Cooking appliances                                                                             | 10 A + 30% f.l. of connected cooking appliances in excess of 10 A + 5 A if a socket-outlet is incorporated in the control unit | 100% f.l. of largest appliance +80% f.l. of second largest appliance +60% f.l. of remaining appliances | 100% f.l. of largest appliance +80% f.l. of second largest appliance +60% f.l. of remaining appliances |
> | 4 Motors (other than lift motors, which are subject to special consideration)                    | Not applicable                                                                    | 100% f.l. of largest motor +80% f.l. of second largest motor +60% f.l. of remaining motors | 100% f.l. of largest motor +50% f.l. of remaining motors                                      |
> | 5 Water heaters (instantaneous type)*                                                            | 100% f.l. of largest appliance +100% f.l. of second largest appliance +25% f.l. of remaining appliances | 100% f.l. of largest appliance +100% f.l. of second largest appliance +25% f.l. of remaining appliances | 100% f.l. of largest appliance +100% f.l. of second largest appliance +25% f.l. of remaining appliances |
> | 6 Water heaters (thermostatically controlled)                                                    | No diversity allowable                                                             | No diversity allowable                                                             | No diversity allowable                                                                     |
> | 7 Floor warming installations                                                                    | No diversity allowable†                                                            | No diversity allowable†                                                            | No diversity allowable†                                                                    |
> | 8 Thermal storage space heating                                                                  | No diversity allowable†                                                            | No diversity allowable†                                                            | No diversity allowable†                                                                    |
> | 9 Standard arrangement of final circuits in accordance with Appendix H                           | 100% of current demand of largest circuit +40% of current demand of every other circuit | 100% of current demand of largest circuit +50% of current demand of every other circuit | 100% of current demand of largest circuit +40% of current demand of every other circuit       |
> | 10 Socket-outlets (other than those included in 9 above and stationary equipment other than those listed above) | 100% of current demand of largest point of utilization +40% of current demand of every other point of utilization | 100% of current demand of largest point of utilization +70% of current demand of every other point of utilization | 100% of current demand of largest point of utilization +75% of current demand of every other point in main rooms (dining rooms, etc.) +40% of current demand of every other point of utilization |
> 
> **NOTES to Table A2:**
> 
> * In this context, an instantaneous water heater is considered to be a water heater of any loading that heats water only while the tap is turned on and therefore uses electricity intermittently.
> 
> † It is important to ensure that distribution boards or consumer units are of sufficient rating to take the total load connected to them without the application of any diversity.
> 

### Frequently Asked Questions

#### Q: What is the maximum demand calculation for lighting circuits in different types of premises?

**A**: According to Table H2 of Guidance Note 1, the maximum demand for lighting circuits is calculated as 66% of the total current demand in individual household installations, 90% in small shops, and 75% in small hotels.

#### Q: How should diversity be applied to heating and power circuits?

**A**: For heating and power circuits, Table H2 states that for individual household installations, 100% of the total current demand up to 10 A should be considered, plus 50% of any current demand exceeding 10 A. Different percentages apply to small shops and hotels, as specified in the table.

#### Q: Are there specific diversity rules for thermostatically controlled water heaters?

**A**: Yes, Table H2 explicitly states that no diversity is allowed for thermostatically controlled water heaters across all types of premises. This ensures the circuit is fully capable of handling the load without any risk of overloading.

#### Q: Can diversity be applied to electric vehicle (EV) charging circuits?

**A**: According to the notes in Table H2, diversity should not be applied to circuits intended for electric vehicle (EV) charging.

#### Q: Is load curtailment considered in maximum demand calculations?

**A**: Yes, the notes in Table H2 allow designers to consider load curtailment, including load reduction or disconnection, either automatically or manually, when determining the maximum demand of an installation.
