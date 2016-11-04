using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace StrawberrySass.Data.Migrations
{
    public partial class CreateAdditionalInfosColToUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetUsersInfoSup",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Avatar = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsersInfoSup", x => x.Id);
                });

            migrationBuilder.AddColumn<int>(
                name: "AdditionalInfosId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_AdditionalInfosId",
                table: "AspNetUsers",
                column: "AdditionalInfosId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_AspNetUsersInfoSup_AdditionalInfosId",
                table: "AspNetUsers",
                column: "AdditionalInfosId",
                principalTable: "AspNetUsersInfoSup",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_AspNetUsersInfoSup_AdditionalInfosId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_AdditionalInfosId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "AdditionalInfosId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "AspNetUsersInfoSup");
        }
    }
}
