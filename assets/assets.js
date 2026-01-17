import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import microsoft_365 from './microsoft-365.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import sase_icon from './sase-icon.png';
import trio_icon from './trio-icon.png';
import lavang_icon from './lavang-icon.png';
import stantec_icon from './stantec-icon.png'
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    microsoft_365,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    sase_icon,
    trio_icon,
    lavang_icon,
    stantec_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

// Project data
export const workData = [
    {
        title: 'NFL Predictor',
        description: 'personal project',
        bgImage: '/nfl.png',
        link: 'https://github.com/andynyugen/nfl_predictor'
    },
    {
        title: 'Portfolio Website',
        description: 'personal project',
        bgImage: '/website.png',
        link: 'https://github.com/andynyugen/personal_website'
    },
    {
        title: 'Cave Game',
        description: 'class project',
        bgImage: '/cave.png',
        link: 'https://github.com/andynyugen/cave_adventure_game'
    },
    {
        title: 'To-Do List',
        description: 'first personal project',
        bgImage: '/to-do.png',
        link: 'https://github.com/andynyugen/todo_list'
    },
]

// Experience data
export const serviceData = [
    { icon: assets.stantec_icon, title: 'Cloud Infrastructure & DevOps Intern', description: 'Stantec', time: 'Jan. 2026 - Present', link: '' },
    { icon: assets.sase_icon, title: 'President', description: 'Society of Asian Scientists and Engineers (SASE)', time: 'Mar. 2024 - Present', link: '' },
    { icon: assets.trio_icon, title: 'Peer Tutor', description: 'TRIO SSS (Student Support Services)', time: 'Oct. 2024 - Present',link: '' },
    { icon: assets.lavang_icon, title: 'Youth Leader', description: 'Our Lady of Lavang Parish', time: 'Jul. 2021 - Present', link: '' }
]

// About me data (summary)
export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, C/C++, SQL, Javascript, HTML/CSS, React JS, Next JS, R' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'CS major & Statistics minor @ Oregon State University' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Graduation', description: 'Expected: June 2027' }
];

// About me data (tools)
export const toolsData = [
    assets.vscode, assets.microsoft_365, assets.mongodb, assets.figma, assets.git
];