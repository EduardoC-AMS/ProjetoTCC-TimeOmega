using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InfraData.Migrations
{
    public partial class Category : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CategoryName",
                table: "Category");

            migrationBuilder.DropColumn(
                name: "CategoryType",
                table: "Category");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CategoryName",
                table: "Category",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CategoryType",
                table: "Category",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
