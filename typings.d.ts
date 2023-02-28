interface Message {
  text: string;
  createdAt: EmitAndSemanticDiagnosticsBuilderProgram.firestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
