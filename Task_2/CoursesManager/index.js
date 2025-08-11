#!/usr/bin/env node
import {program }from 'commander';

import inquirer from 'inquirer';

import fs from 'fs'


program
  .name('MyCli')
  .description('CLI to make courses')
  .version('1.0.0');

let questions = [
        {
            type:"input",
            name : "title",
            message:"what is the title of the course?"
            
        },
        {
            type:"input",
            name : "price",
            message:"what is the price of the course?"
            
        }
    ]

let filePath = "./data.json"
program
  .command("add")
  .alias("a")
  .description("add a new course")
  .action(()=> {
    inquirer
    .prompt(questions)
    .then((answers) => {

        if(fs.existsSync(filePath)) {
            fs.readFile(filePath, "utf-8", (err, fileContent) => {
                if (err) {
                    console("Error", err)
                    process.exit();
                }
                console.log("file content", fileContent)
                const fileContentAsJson = JSON.parse(fileContent);
                fileContentAsJson.push(answers)
                fs.writeFile(filePath, JSON.stringify(fileContentAsJson), "utf-8",() => {
                    console.log("add course done")
                })
                
            })
        }
        else {
            fs.writeFile(filePath, JSON.stringify([answers]), "utf-8", () => {
            console.log("add course done")

            })
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
  });

  })
program
  .command("list")
  .alias("l")
  .description("lists all courses")
  .action(() => {
    fs.readFile(filePath, "utf-8", (err, fileContent) => {
        if(err) {
            console.log("Error reading file:", err)
            process.exit()
        }
        console.table(JSON.parse(fileContent))
    })
  })


program.parse(process.argv);







