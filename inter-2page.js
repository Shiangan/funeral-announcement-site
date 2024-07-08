@WebServlet("/submitMemorialMessage")
public class MemorialMessageServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 从请求中获取表单数据
        String name = request.getParameter("name");
        String message = request.getParameter("message");
        Part photoPart = request.getPart("photo");

        // 处理上传的照片
        String photoFileName = Paths.get(photoPart.getSubmittedFileName()).getFileName().toString();
        InputStream photoInputStream = photoPart.getInputStream();
        // 将照片保存到服务器或者存储到数据库

        // 示例：保存留言到数据库或者发送邮件
        // 可以使用DAO或者其他持久层框架来处理数据库操作
        // ExampleDAO.saveMemorialMessage(name, message, photoFileName);

        // 发送邮件示例
        // EmailService.sendMemorialMessageEmail(name, message, photoFileName);

        // 返回响应
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write("留言已收到，感谢您的参与！");
    }
}
