var builder = DistributedApplication.CreateBuilder(args);

var coffeeWebsite = builder.AddJavaScriptApp("coffeeWebsite", "../coffee-website",runScriptName: "start")
    .WithHttpEndpoint(env: "PORT");

builder.Build().Run();
