namespace IfuWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangedDefaultColName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.User", "FirstNmae", c => c.String());
            AddColumn("dbo.User", "LastName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.User", "LastName");
            DropColumn("dbo.User", "FirstNmae");
        }
    }
}
