# LookBook

An app that allows users to create and share their own lookbooks and buy the Fashion items they like.

The goals was to create mobile first user interface that is easy to use and navigate.

- Created a dummy data for the app to display.
   - The dummy Data contains looks of users
   - the looks contain the items that the user is wearing in the look
   - the items contain the name of the item, the brand, the price and the image of the item

## Existing Features
- Users can view the looks of other users
- Auto Scroll through the different looks
- Users can view the items in the looks of other users

## Features Left to Implement
- Adding videos to the looks

## Problems with current version
- The Carousel scroll affects the items link in the looks
- The Carousel causes UI issues on Refresh
- The Carousel keeps on scrolling even when the look is not in the view
- The app is not responsive for Desktop

## Better ways to implement the app 
- Check for ways to stop carousel slide on drag
- Remove the looks from DOM when not in view

## Technologies Used
- UI Library: React
- Styling: Tailwind CSS
- UI Components: ShadCN
- Language: TypeScript

## How to run the app
- Clone the repo
- Run `pnpm install`
- Run `pnpm dev`
- Open `http://localhost:5173/` in your browser
- To build the app run `pnpm build`
