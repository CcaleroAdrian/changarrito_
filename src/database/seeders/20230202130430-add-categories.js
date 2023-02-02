'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

return queryInterface.bulkInsert('Categories', [
{ name: "Pastas", src: "categorias/pasta.jpg", createdAt:new Date(),updatedAt:new Date()},
{ name: "Mexicana", src: "categorias/Mexicana.jpg",createdAt:new Date(),updatedAt:new Date() },
{ name: "Postres", src: "categorias/postre.jpg",createdAt:new Date(),updatedAt:new Date()  },
{ name: "Saludable", src: "categorias/Saludable.jpg",createdAt:new Date(), updatedAt:new Date()},
{ name: "Hanburguesas", src: "categorias/Hamburguesa.jpg",createdAt:new Date(),updatedAt:new Date()  },
{ name: "Tacos", src: "categorias/tacos.jpg",createdAt:new Date(),updatedAt:new Date() }
  

]);


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await  queryInterface.bulkDelete('Categories', null, {});
  }
};
