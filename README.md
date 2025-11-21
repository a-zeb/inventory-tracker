1. How does TypeScript enforce type safety in this object-oriented program?
   It throws errors if the wrong type is used.
2. How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?
   They extended Product making us not have to create a new display details method.
3. What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?
   One of the benefits are providing data integrity. For example, by making the SKU private, I ensure it won't be changed accidentally.
4. If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?
   Polymorphism would make this straightforward because all I would need to do is extend the product class to hold the values and
   then use it's built in display method to display values.
