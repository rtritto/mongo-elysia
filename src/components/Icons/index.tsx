import type { Component } from 'solid-js'

import IconTemplate, { type IconProps } from './IconTemplate'
import { Add, Apps, Close, Delete, Edit, FileUpload, Hamburger, Home, Info, PlayCircleFilledOutlined, Save, Visibility } from './SvgBase64'

const a = { viewBox: '0 0 24 24' }

export const AddIcon: Component<IconProps> = (props) => IconTemplate({ a, c: `<path d="${Add}"/>` }, props)

export const AppsIcon: Component<IconProps> = (props) => IconTemplate({ a, c: `<path d="${Apps}"/>` }, props)

export const CloseIcon: Component<IconProps> = (props) => IconTemplate({ a, c: `<path d="${Close}"/>` }, props)

export const DeleteIcon: Component<IconProps> = (props) => IconTemplate({ a, c: `<path d="${Delete}"/>` }, props)

export const EditIcon: Component<IconProps> = (props) => IconTemplate({ a, c: `<path d="${Edit}"/>` }, props)

export const FileUploadIcon: Component<IconProps> = (props) => IconTemplate({ a, c: `<path d="${FileUpload}"/>` }, props)

export const HamburgerIcon: Component<IconProps> = (props) => IconTemplate({ a, c: `<path d="${Hamburger}"/>` }, props)

export const HomeIcon: Component<IconProps> = (props) => IconTemplate({ a, c: `<path d="${Home}"/>` }, props)

export const InfoIcon: Component<IconProps> = (props) => IconTemplate({ a, c: `<path d="${Info}"/>` }, props)

export const PlayCircleFilledOutlinedIcon: Component<IconProps> = (props) => IconTemplate({ a, c: `<path d="${PlayCircleFilledOutlined}"/>` }, props)

export const SaveIcon: Component<IconProps> = (props) => IconTemplate({ a, c: `<path d="${Save}"/>` }, props)

export const VisibilityIcon: Component<IconProps> = (props) => IconTemplate({ a, c: `<path d="${Visibility}"/>` }, props)