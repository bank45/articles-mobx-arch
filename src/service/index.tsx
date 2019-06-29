import React, { Component } from 'react';

class ServiceAPI {
    async  getResource(url) {
        const res = await fetch(url)
        if (!res['ok']) {
            throw new Error(`URL not fetch received ${res['status']}`);
        }
        return await res.json();
    }
    getNewNews(url) {
        return this.getResource(url)
    }
}

export default ServiceAPI;