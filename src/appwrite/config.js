import conf from "../conf/conf";

import { Client, Databases, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async addPassword({ website_url, username, email, password }) {
    try {
      console.log(website_url, username, email, password);
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        // add a unique ID here
        ID.unique(),
        {
          website_url,
          username,
          email,
          password,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: addPassword :: error", error);
    }
  }

  async updatePassword({ website_url, username, email, password }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        // add a unique ID here
        {
          website_url,
          username,
          email,
          password,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePassword :: error", error);
    }
  }

  async deletePassword({ email }) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        email
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePassword :: error", error);
      return false;
    }
  }

  async getAllPasswords() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId // check the docs once
      );
    } catch (error) {
      console.log("Appwrite service :: getAllPasswords :: error", error);
    }
  }
}

const service = new Service();

export default service;
