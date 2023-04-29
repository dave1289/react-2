### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
Creating a way to utilize similar functionality to routing with HTML pages but through components.

- What is a single page application?
Application that uses react router to navigate components as if they were multiple pages.  Therefore we have no reloading, no refreshing, just components showing or not.

- What are some differences between client side and server side routing?
Server side routing reloads pages between and utilizes different HTML documents for different pages.  Client side routing has all of the information available from the start and the client side routes let you control what is being displayed to the user.

- What are two ways of handling redirects with React Router? When would you use each?
You can use Redirect or useHistory.  useHistory is useful when you want to preserve the ability to use the back button in the browser to reverse navigation.  Redirects are useful for when someone ends up on the wrong page, wrong url, or are not authorized to be where they are trying to go.
**NEITHER OF THESE WORK IN REACT ROUTER V6**

- What are two different ways to handle page-not-found user experiences using React Router? 
You can use a catchall route which uses a non path related character to catch any un-declared routes.  Or you can use a redirect to a 404 page.

- How do you grab URL parameters from within a component using React Router?
You use the syntax "/:PARAM" similar to express functionality and then we use the useParams hook to pull information from the URL.

- What is context in React? When would you use it?
Context is a way to pass data down through any number of nested components without passing it as a prop every time.

- Describe some differences between class-based components and function
  components in React.
  Class based components don't have a useful way of transferring data down or tracking state within themselves causing a lot more steps, lines, and convulution.  Function based components were created to solve the problems with class based components; they allow us to save state, control when things render due to changes within the component, and allow us to send props down to children and beyond.

- What are some of the problems that hooks were designed to solve?
Class based components don't have a way to track state inherently, simplify functionality when mounting/unmounting/rendering/etc, get rid of the need for higher order components which add complexity to accomplish the same thing that hooks now takes care of.