import React, { Fragment } from 'react'
import Images from './Images'
import Text from './Text'
import Label from './Label'
import List from './List'
import Header from './Header'
import Navigation from './Navigation'
import Grid from './Grid'
import Footer from './Footer'
import Carousel from './Carousel'
import Video from './Video'

function capitalize(str = '') {
    if (!str) {
        return ''
    }

    return str[0].toUpperCase() + str.slice(1)
}

const keysToComponentMap = {
    Text,
    Label,
    List,
    Images,
    Grid,
    Header,
    Footer,
    Carousel,
    Video,
    Navigation,
}

const mapPropsToConfig = (config) => {
    const configWithProps = []

    config.forEach((item) => {
        if (item.componentType) {
            const { componentType, ...props } = item

            configWithProps.push({
                ...props,
                Component: capitalize(componentType),
            })
        }
    })

    return configWithProps
}

export const Renderer = ({ config }) => {
    if (!config) {
        throw new Error('You are calling Renderer with no config.')
    }

    const configWithProps = mapPropsToConfig(config)

    return (
        <Fragment>
            {configWithProps.map((item, index) => {
                const { Component, ...props } = item
                //Changes json string to component value
                const Comp = keysToComponentMap[Component]
                return <Comp {...props.attributes} key={index} />
            })}
        </Fragment>
    )

    /*     const renderComponents = (items, index) => {
        return items.map((item) => {
            const { Component, ...props } = item
            //Changes json string to component value
            const Comp = keysToComponentMap[Component]

            return (
                <Fragment key={index}>
                    <Comp {...props.attributes} />
                </Fragment>
            )
        })
    } 
    renderComponents(configWithProps)
        */
}
